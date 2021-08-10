import React, { useState } from 'react';
import axios from '../../utils/axiosConfigs';

function AddItemForm() {
	const [itemName, setItemName] = useState('');
	const [priority, setPriority] = useState(1);

	const [errorMessage, setErrorMessage] = useState(false);

	const createItem = e => {
		e.preventDefault();

		if (itemName.length === 0) {
			setErrorMessage(true);
			setTimeout(() => setErrorMessage(false), 2000);
		}

		const data = {
			item: itemName,
			priority,
		};

		axios
			.post('/shopping-list/create', data)
			.then(res => console.log(res))
			.catch(err => console.log(err));

		setItemName('');
		setPriority(1);
	};

	return (
		<form onSubmit={e => createItem(e)}>
			<div className='mb-3'>
				<label htmlFor='item-name' className='form-label'>
					Item Name <span style={{ color: 'red' }}>*</span>
				</label>
				<input type='text' className='form-control' id='item-name' aria-describedby='error' onChange={e => setItemName(e.target.value)} value={itemName} />

				{errorMessage && (
					<div id='error' className='form-text' style={{ color: 'red' }}>
						Please, provide item name!
					</div>
				)}
			</div>

			<div className='mb-3'>
				<label htmlFor='priority' className='form-label'>
					Priority
				</label>
				<select id='priority' className='form-select' onChange={e => setPriority(e.target.value)}>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
				</select>
			</div>

			<button type='submit' className='btn' style={{ backgroundColor: '#7A5836', color: 'white' }}>
				Submit
			</button>
		</form>
	);
}

export default AddItemForm;
