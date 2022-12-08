const express = require('express');
const router = express.Router();
const { deleteBook } = require('../../../controllers/admin/books/adminBookController');

router.get('/', deleteBook);

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete Book ${req.params.id}` });
});

module.exports = router;