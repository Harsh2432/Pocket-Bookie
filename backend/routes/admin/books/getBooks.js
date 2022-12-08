const express = require('express');
const router = express.Router();
const { getBooks } = require('../../../controllers/admin/books/adminBookController');

router.get('/', getBooks);

module.exports = router;