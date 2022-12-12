const express = require('express');
const router = express.Router();
const { updateBook, updateBookID } = require('../../../controllers/admin/books/adminBookController');
const { protect } = require('../../../middleware/authMiddleware');

router.get('/', protect, updateBook);

router.put('/:id', protect, updateBookID);

module.exports = router;