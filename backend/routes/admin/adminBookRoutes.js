const express = require('express');
const router = express.Router();
const { booksRoute } = require('../../controllers/admin/adminController');

router.get('/', booksRoute);

router.use('/getBooks', require('./books/getBooks'));
router.use('/addBook', require('./books/addBook'));
router.use('/updateBook', require('./books/updateBook'));
router.use('/deleteBook', require('./books/deleteBook'));

module.exports = router;