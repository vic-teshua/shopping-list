const Item = require('../models/ListItem');

exports.createItem = async (req, res) => {
	const { item, priority } = req.body;

	try {
		const itemToAdd = new Item({ item, priority });
		if (!priority) itemToAdd.priority = 5;
		const result = await itemToAdd.save();

		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);
	}
};

exports.showList = async (req, res) => {
	try {
		const list = await Item.find().sort({ priority: 1 });

		res.status(200).json(list);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.deleteItem = async (req, res) => {
	const { item } = req;
	try {
		const deletedItem = await item.deleteOne();
		res.status(200).send(deletedItem);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.editItem = async (req, res) => {
	const { item, priority } = req.body;
	const itemToEdit = req.item;

	try {
		// const updatedItem = await Item.findOneAndUpdate({ _id: req.params.id }, { item, priority }, { new: true });
		// const updatedItem = await req.item.updateOne({ item, priority }, { new: true });

		itemToEdit.item = item;
		itemToEdit.priority = !priority ? itemToEdit.priority : priority;
		itemToEdit.save();

		res.status(200).send(itemToEdit);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

exports.isDone = async (req, res) => {
	const { item } = req;
	const { done } = req.body;

	console.log(done, item);
	try {
		item.done = done;
		item.priority = 6;
		await item.save();

		res.status(200).send(item);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
