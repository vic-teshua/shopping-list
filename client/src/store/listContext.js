import { createContext, useState, useEffect } from 'react';
import axios from '../utils/axiosConfigs';

const ListContext = createContext({});

const ListProvider = props => {
	const [list, setList] = useState([]);

	useEffect(() => {
		axios
			.get('/shopping-list/show-list')
			.then(res => setList(res.data))
			.catch(err => console.log(err));
	}, []);

	const deleteItem = id => {
		axios
			.delete(`/shopping-list/delete-item/${id}`)
			.then(res => console.log(res))
			.catch(err => console.log(err));
		// window.location.reload(); // I don't like, how it blinks when reloading

		const newList = list.filter(item => item._id !== id);
		setList(newList);
	};

	return <ListContext.Provider value={{ list, setList, deleteItem }}>{props.children}</ListContext.Provider>;
};

export { ListContext, ListProvider };
