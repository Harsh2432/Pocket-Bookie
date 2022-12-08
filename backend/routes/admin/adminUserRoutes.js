const express = require('express');
const router = express.Router();
const { usersRoute } = require('../../controllers/admin/adminController');

router.get('/', usersRoute);

module.exports = router;