const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        image: {
            type: String,
            required: [true, 'Please upload book\'s image']
        },
        inStock: {
            type: Boolean,
            required: [true, 'Please mention whether book is in stock or not']
        },
        name: {
            type: String,
            required: [true, 'Please add a book\'s name']
        },
        author: {
            type: String,
            required: [true, 'Please add book\'s author name']
        },
        rating: {
            type: String,
            required: [true, 'Please rate the book between 1 - 5']
        },
        sku: {
            type: String,
            required: [true, 'Please add book\'s SKU']
        },
        cost: {
            type: String,
            required: [true, 'Please add book\'s cost']
        },
        shortDescription: {
            type: String,
            required: [true, 'Please add book\'s description in short']
        },
        quantity: {
            type: Number,
            required: [true, 'Please add book\'s quantity']
        },
        categories: {
            type: Array,
            required: [true, 'Please add book\'s categories']
        },
        tags: {
            type: Array,
            required: [true, 'Please add book\'s tags']
        },
        description: {
            type: String,
            required: [true, 'Please add book\'s description']
        },
        weight: {
            type: String,
            required: [true, 'Please add book\'s weight']
        },
        language: {
            type: String,
            required: [true, 'Please add book\'s language']
        },
        reviews: {
            type: Array,
            required: [true, 'Please add book\'s reviews']
        },
        storeName: {
            type: String,
            required: [true, 'Please add book\'s store name']
        },
        vendor: {
            type: String,
            required: [true, 'Please add book\'s vendor name']
        },
        address: {
            type: String,
            required: [true, 'Please add book\'s store address']
        },
        ratingReview: {
            type: String,
            required: [true, 'Please add book\'s rating from reviews']
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Book', bookSchema);