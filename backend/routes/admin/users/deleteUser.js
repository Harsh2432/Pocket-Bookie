const express = require('express');
const router = express.Router();
const { deleteUser, deleteUserID } = require('../../../controllers/admin/users/adminUserController');
const { protect } = require('../../../middleware/authMiddleware');

router.get('/', protect, deleteUser);

router.delete('/:id', protect, deleteUserID);

module.exports = router;