const express = require('express');
const router = express.Router();
const { getUsers } = require('../../../controllers/admin/users/adminUserController');
const { protect } = require('../../../middleware/authMiddleware');

router.get('/', protect, getUsers);

module.exports = router;