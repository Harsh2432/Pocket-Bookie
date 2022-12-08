const asyncHandler = require('express-async-handler');

const adminRoute = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Admin Page' });
});

const booksRoute = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Admin Books Page' });
});

const usersRoute = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Admin Users Page' });
});

module.exports = {
    adminRoute,
    booksRoute,
    usersRoute
};