const asyncHandler = require('express-async-handler');

const Book = require('../../../models/bookModel');

// @desc    Get books
// @route   GET /admin/books/getBooks
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find();

    res.status(200).json(books);
});

// @desc    Add book
// @route   POST /admin/books/addBook
// @access  Private
const addBook = asyncHandler(async (req, res) => {
    if (!req.body.image) {
        res.status(400);
        throw new Error('Please upload book\'s image');
    };
    if (!req.body.inStock) {
        res.status(400);
        throw new Error('Please mention whether book is in stock or not');
    };
    if (!req.body.name) {
        res.status(400);
        throw new Error('Please add book\'s name');
    };
    if (!req.body.author) {
        res.status(400);
        throw new Error('Please add book\'s author name');
    };
    if (!req.body.rating) {
        res.status(400);
        throw new Error('Please rate the book between 1 - 5');
    };
    if (!req.body.sku) {
        res.status(400);
        throw new Error('Please add book\'s SKU');
    };
    if (!req.body.cost) {
        res.status(400);
        throw new Error('Please add book\'s cost');
    };
    if (!req.body.shortDescription) {
        res.status(400);
        throw new Error('Please add book\'s description in short');
    };
    if (!req.body.quantity) {
        res.status(400);
        throw new Error('Please add book\'s quantity');
    };
    if (!req.body.categories) {
        res.status(400);
        throw new Error('Please add book\'s categories');
    };
    if (!req.body.tags) {
        res.status(400);
        throw new Error('Please add book\'s tags');
    };
    if (!req.body.description) {
        res.status(400);
        throw new Error('Please add book\'s description');
    };
    if (!req.body.weight) {
        res.status(400);
        throw new Error('Please add book\'s weight');
    };
    if (!req.body.language) {
        res.status(400);
        throw new Error('Please add book\'s language');
    };
    if (!req.body.reviews) {
        res.status(400);
        throw new Error('Please add book\'s reviews');
    };
    if (!req.body.storeName) {
        res.status(400);
        throw new Error('Please add book\'s store name');
    };
    if (!req.body.vendor) {
        res.status(400);
        throw new Error('Please add book\'s vendor name');
    };
    if (!req.body.address) {
        res.status(400);
        throw new Error('Please add book\'s store address');
    };
    if (!req.body.rating) {
        res.status(400);
        throw new Error('Please add book\'s rating');
    };

    const book = await Book.create({
        image: req.body.image,
        inStock: req.body.inStock,
        name: req.body.name,
        author: req.body.author,
        rating: req.body.rating,
        sku: req.body.sku,
        cost: req.body.cost,
        shortDescription: req.body.shortDescription,
        quantity: req.body.quantity,
        categories: req.body.categories,
        tags: req.body.tags,
        description: req.body.description,
        weight: req.body.weight,
        language: req.body.language,
        reviews: req.body.reviews,
        storeName: req.body.storeName,
        vendor: req.body.vendor,
        address: req.body.address,
        ratingReview: req.body.ratingReview
    });

    res.status(201).json(book);
});

// @desc    Update book
// @route   GET /admin/books/updateBook
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update Book' });
});

// @desc    Update book
// @route   PUT /admin/books/updateBook/:id
// @access  Private
const updateBookID = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) {
        res.status(400);
        throw new Error('Book not found');
    };

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });

    res.status(200).json(updatedBook);
});

// @desc    Delete book
// @route   PUT /admin/books/deleteBook
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete Book' });
});

// @desc    Delete book
// @route   PUT /admin/books/deleteBook/:id
// @access  Private
const deleteBookID = asyncHandler(async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
        res.status(400);
        throw new Error('Book not found');
    };

    await book.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getBooks,
    addBook,
    updateBook,
    updateBookID,
    deleteBook,
    deleteBookID
}