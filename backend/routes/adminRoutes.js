const express = require('express');
const router = express.Router();
const { adminRoute } = require('../controllers/admin/adminController');

router.get('/', adminRoute);

router.use('/books', require('./admin/adminBookRoutes'));
router.use('/users', require('./admin/adminUserRoutes'));

module.exports = router;