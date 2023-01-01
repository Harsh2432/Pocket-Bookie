const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Admin = require('../../models/adminModel');

// @desc    Get admin data
// @route   GET /admin/me
// @access  Private
const adminRoute = asyncHandler(async (req, res) => {
    const { email, password } = await Admin.findById({ email });
    res.status(200).json({ message: 'Admin Page' });
});

// // @desc    Register new admin
// // @route   POST /admin/register
// // @access  Public
// const adminRegister = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;

//     // Check if user exists
//     if (!email || !password) {
//         res.status(400);
//         throw new Error('Please add all fields');
//     };

//     const adminExists = await Admin.findOne({ email });

//     if (adminExists) {
//         res.status(400)
//         throw new Error('Admin already exists');
//     };

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create user
//     const admin = await Admin.create({
//         email,
//         password: hashedPassword
//     });

//     if (admin) {
//         res.status(201).json({
//             _id: admin.id,
//             email: admin.email,
//             token: generateToken(admin._id)
//         });
//     }
//     else {
//         res.status(400);
//         throw new Error('Invalid user data');
//     };
// });

// @desc    Login admin
// @route   POST /admin/
// @access  Public
const adminLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check for user email
    const admin = await Admin.findOne({ email });

    if (admin && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin.id,
            email: admin.email,
            token: generateToken(admin._id)
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid credentials');
    };
});

// @desc    Get book routes
// @route   GET /admin/books
// @access  Private
const booksRoute = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Admin Books Page' });
});

// @desc    Get user routes
// @route   GET /admin/users
// @access  Private
const usersRoute = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Admin Users Page' });
});

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

module.exports = {
    adminRoute,
    adminLogin,
    booksRoute,
    usersRoute
};