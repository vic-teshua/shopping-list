const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
	item: { type: String, required: true },
	done: { type: Boolean, default: false, required: true },
	priority: { type: Number, min: [1, 'Priority must me more or equal 1'], max: [6, 'Priority must be less than 6'] }, // 1-5 input from user, 6 if checked done
});

const ListItem = mongoose.model('item', ItemSchema);

module.exports = ListItem;
