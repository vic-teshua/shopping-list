import React from 'react';
import axios from '../../utils/axiosConfigs';

function CheckBox({ id, done, newItem }) {
	const handleChecked = id => {
		axios
			.put(`/shopping-list/check-done/${id}`, {
				done: !done,
			})
			.then(res => console.log(res))
			.catch(err => console.log(err));

		window.location.reload();
	};

	return (
		<input
			className='form-check-input me-3'
			type='checkbox'
			value={newItem}
			title='item is bought'
			onClick={() => handleChecked(id)}
			htmlFor='check'
			defaultChecked={done}
		/>
	);
}

export default CheckBox;
