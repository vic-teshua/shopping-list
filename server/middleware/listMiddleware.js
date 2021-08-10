const Item = require('../models/ListItem');

exports.ifItemExists = async (req, res, next) => {
	const id = req.params.id;

	const item = await Item.findById(id);
	if (item === null) return res.status(404).send({ message: 'This item is not found!' });

	req.item = item;
	next();
};
