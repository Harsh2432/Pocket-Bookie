const mongoose = require('mongoose');

const userProfileSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        firstName: {
            type: String,
            required: [true, 'Please add your first name']
        },
        lastName: {
            type: String,
            required: [true, 'Please add your last name']
        },
        gender: {
            type: String,
            required: [true, 'Please add your gender']
        },
        mobile: {
            type: String,
            required: [true, 'Please add your mobile number']
        },
        address: {
            type: String,
            required: [true, 'Please add your address']
        }
    }
);

module.exports = mongoose.model('UserProfile', userProfileSchema);