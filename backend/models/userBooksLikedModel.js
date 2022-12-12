const mongoose = require('mongoose');

const userBooksLikedSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        booksLiked: {
            type: Array
        }
    }
);

module.exports = mongoose.model('UserBooksLiked', userBooksLikedSchema);