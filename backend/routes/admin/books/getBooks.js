const express = require('express');
const router = express.Router();
const { getBooks } = require('../../../controllers/admin/books/adminBookController');
const { protect } = require('../../../middleware/authMiddleware');

router.get('/', protect, getBooks);

module.exports = router;