const express = require('express');
const router = express.Router();
const { adminRoute,
    adminLogin
} = require('../controllers/admin/adminController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', adminLogin);
router.get('/me', protect, adminRoute);

router.use('/books', require('./admin/adminBookRoutes'));
router.use('/users', require('./admin/adminUserRoutes'));

module.exports = router;