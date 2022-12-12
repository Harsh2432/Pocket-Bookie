const express = require('express');
const router = express.Router();
const { profile, editProfile } = require('../../controllers/users/userController');
const { protect } = require('../../middleware/authMiddleware');

router.get('/profile', protect, profile);
router.post('/editProfile', protect, editProfile);

module.exports = router;