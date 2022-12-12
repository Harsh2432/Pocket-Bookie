const mongoose = require('mongoose');

const userBooksPurchasedSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        booksPurchased: {
            type: Array
        }
    }
);

module.exports = mongoose.model('UserBooksPurchased', userBooksPurchasedSchema);