const express = require('express');
const router = express.Router();
const { updateBook } = require('../../../controllers/admin/books/adminBookController');

router.get('/', updateBook);

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update Book ${req.params.id}` });
});

module.exports = router;