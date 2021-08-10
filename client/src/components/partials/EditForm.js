import React from 'react';
import axios from '../../utils/axiosConfigs';

function EditForm(props) {
	const { id, setEditMode, newItem, setNewItem } = props;

	const saveChanges = e => {
		e.preventDefault();

		const dataToUpdate = { item: newItem };

		axios
			.put(`shopping-list/edit-item/${id}`, dataToUpdate)
			.then(res => console.log(res))
			.catch(err => console.log(err));

		setEditMode(false);
	};

	return (
		<form onSubmit={e => saveChanges(e)}>
			<input type='text' onChange={e => setNewItem(e.target.value)} value={newItem} />
		</form>
	);
}

export default EditForm;
