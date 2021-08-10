import React from 'react';

function EditButton(props) {
	const { setEditMode } = props;

	return (
		<button title='edit item' onClick={() => setEditMode(true)}>
			<i className='fas fa-pencil-alt'></i>
		</button>
	);
}

export default EditButton;
