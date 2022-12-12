const express = require('express');
const router = express.Router();
const { deleteBook, deleteBookID } = require('../../../controllers/admin/books/adminBookController');
const { protect } = require('../../../middleware/authMiddleware');

router.get('/', protect, deleteBook);

router.delete('/:id', protect, deleteBookID);

module.exports = router;