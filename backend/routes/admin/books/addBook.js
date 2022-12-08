const express = require('express');
const router = express.Router();
const { addBook } = require('../../../controllers/admin/books/adminBookController');

router.post('/', addBook);

module.exports = router;