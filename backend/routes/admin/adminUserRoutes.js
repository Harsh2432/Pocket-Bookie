const express = require('express');
const router = express.Router();
const { usersRoute } = require('../../controllers/admin/adminController');
const { protect } = require('../../middleware/authMiddleware');

router.get('/', protect, usersRoute);

router.use('/getUsers', require('./users/getUsers'));
router.use('/deleteUser', require('./users/deleteUser'));

module.exports = router;