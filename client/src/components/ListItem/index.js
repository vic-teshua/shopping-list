import React, { useState } from 'react';
import './index.css';

import EditForm from '../partials/EditForm';
import EditButton from '../partials/EditButton';
import DeleteButton from '../partials/DeleteButton';
import CheckBox from '../partials/CheckBox';

function ListItem(props) {
	const { done, item, priority, _id } = props;

	const [editMode, setEditMode] = useState(false);
	const [newItem, setNewItem] = useState(item);

	const styleChecked = done ? 'checked-item' : 'null';

	return (
		<li className='list-group-item list-item'>
			<div>
				<CheckBox id={_id} newItem={newItem} done={done} />

				{editMode ? (
					<EditForm id={_id} setEditMode={setEditMode} newItem={newItem} setNewItem={setNewItem} />
				) : (
					<span id='check' className={styleChecked}>
						{newItem}
					</span>
				)}
			</div>

			<div className='edit-buttons'>
				<EditButton setEditMode={setEditMode} />
				<DeleteButton id={_id} />
			</div>
		</li>
	);
}

export default ListItem;
