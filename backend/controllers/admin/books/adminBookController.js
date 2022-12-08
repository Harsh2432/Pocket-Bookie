const asyncHandler = require('express-async-handler');

const getBooks = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Books' });
});

const addBook = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error('Please add a name');
    };

    res.status(201).json({ message: 'Add Book' });
});

const updateBook = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update Book' });
});

const deleteBook = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete Book' });
});

module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook
}