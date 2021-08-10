import { useContext, useState } from 'react';
import './App.css';
import ListItem from './components/ListItem';
import { ListContext } from './store/listContext';
import Modal from './components/Modal';
import AddForm from './components/AddForm';

function App() {
	const { list } = useContext(ListContext);
	const [show, setShow] = useState(false);

	const addItem = () => {
		console.log('I work!!!');
	};

	const hideModal = () => {
		setShow(false);
	};

	return (
		<div className='App'>
			<div className='container'>
				<h4>Shopping List</h4>
				<ul className='list-group list'>
					{list.map(listItem => (
						<ListItem key={listItem._id} {...listItem} />
					))}
				</ul>

				<Modal show={show} handleClose={hideModal}>
					<AddForm />
				</Modal>

				<div className='add-button' onClick={() => addItem()}>
					<button onClick={() => setShow(true)} title='Add new item'>
						<i className='fas fa-plus-circle'></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
