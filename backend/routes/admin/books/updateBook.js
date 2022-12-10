const express = require('express');
const router = express.Router();
const { updateBook, updateBookID } = require('../../../controllers/admin/books/adminBookController');

router.get('/', updateBook);

router.put('/:id', updateBookID);

module.exports = router;