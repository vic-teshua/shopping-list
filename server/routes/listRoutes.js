const express = require('express');
const router = express.Router();

const { createItem, showList, deleteItem, editItem, isDone } = require('../controllers/listControllers');
const { ifItemExists } = require('../middleware/listMiddleware');

router.post('/create', createItem);
router.get('/show-list', showList);
router.delete('/delete-item/:id', ifItemExists, deleteItem);
router.put('/edit-item/:id', ifItemExists, editItem);
router.put('/check-done/:id', ifItemExists, isDone);

module.exports = router;
