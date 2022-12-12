const express = require('express');
const router = express.Router();
const {
    booksLiked,
    booksPurchased
} = require('../../controllers/users/userController');
const { protect } = require('../../middleware/authMiddleware');

router.get('/booksLiked', protect, booksLiked);
router.get('/booksPurchased', protect, booksPurchased);

module.exports = router;