const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getMe
} = require('../controllers/users/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

router.use('/me', require('./users/userProfileRoutes'));
router.use('/me', require('./users/userBookRoutes'));

module.exports = router;