const express = require('express');
const router = express.Router();
const { deleteBook, deleteBookID } = require('../../../controllers/admin/books/adminBookController');

router.get('/', deleteBook);

router.delete('/:id', deleteBookID);

module.exports = router;