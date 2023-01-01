const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please add a password']
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        gender: {
            type: String
        },
        mobile: {
            type: String
        },
        address: {
            type: String
        },
        booksLiked: {
            type: Array
        },
        booksPurchased: {
            type: Array
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);