import React, { useContext } from 'react';
import { ListContext } from '../../store/listContext';

function DeleteButton(props) {
	const { id } = props;
	const { deleteItem } = useContext(ListContext);

	return (
		<button onClick={() => deleteItem(id)} title='delete item'>
			<i className='fas fa-trash-alt'></i>
		</button>
	);
}

export default DeleteButton;
