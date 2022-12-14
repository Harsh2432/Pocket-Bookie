const express = require('express');
const router = express.Router();
const { addBook } = require('../../../controllers/admin/books/adminBookController');
const { protect } = require('../../../middleware/authMiddleware');

router.post('/', protect, addBook);

module.exports = router;