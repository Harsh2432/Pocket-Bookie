const asyncHandler = require('express-async-handler');

const User = require('../../../models/userModel');

// @desc    Get users
// @route   GET /admin/users/getUsers
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();

    res.status(200).json(users);
});

// @desc    Delete user
// @route   PUT /admin/users/deleteUser
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete User' });
});

// @desc    Delete user
// @route   PUT /admin/users/deleteUser/:id
// @access  Private
const deleteUserID = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
        res.status(400);
        throw new Error('User not found');
    };

    await user.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getUsers,
    deleteUser,
    deleteUserID
};