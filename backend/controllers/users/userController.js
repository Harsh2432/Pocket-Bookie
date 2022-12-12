const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../../models/userModel');
const UserBooksLiked = require('../../models/userBooksLikedModel');
const UserBooksPurchased = require('../../models/userBooksPurchasedModel');
const UserProfile = require('../../models/userProfileModel');

// @desc    Register new user
// @route   POST /users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    if (!email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    };

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400)
        throw new Error('User already exists');
    };

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        email,
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email,
            token: generateToken(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    };
});

// @desc    Authenticate a user
// @route   POST /users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            email: user.email,
            token: generateToken(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid credentials');
    };
});

// @desc    Get user data
// @route   GET /users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    const { _id, email } = await User.findById(req.user.id);

    res.status(200).json({
        id: _id,
        email
    });
});

// @desc    Get user profile
// @route   GET /users/me/profile
// @access  Private
const profile = asyncHandler(async (req, res) => {
    const userProfile = await UserProfile.find({ user: req.user.id });

    res.status(200).json(userProfile);
});

// @desc    Edit user profile
// @route   POST /users/me/editProfile
// @access  Private
const editProfile = asyncHandler(async (req, res) => {
    const userProfile = await UserProfile.find({ user: req.user.id });

    if (!req.body.firstName) {
        res.status(400);
        throw new Error('Please add your first name');
    };
    if (!req.body.lastName) {
        res.status(400);
        throw new Error('Please add your last name');
    };
    if (!req.body.gender) {
        res.status(400);
        throw new Error('Please add your gender');
    };
    if (!req.body.mobile) {
        res.status(400);
        throw new Error('Please add your mobile number');
    };
    if (!req.body.address) {
        res.status(400);
        throw new Error('Please add your address');
    };

    const profile = await UserProfile.create(userProfile, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        mobile: req.body.mobile,
        address: req.body.address
    });

    res.status(201).json(profile);
});

// @desc    Get user liked books
// @route   GET /users/me/booksLiked
// @access  Private
const booksLiked = asyncHandler(async (req, res) => {
    const likedBooks = await UserBooksLiked.find({ user: req.user.id })

    res.status(200).json(likedBooks);
});

// @desc    Get user purchased books
// @route   GET /users/me/booksPurchased
// @access  Private
const booksPurchased = asyncHandler(async (req, res) => {
    const purchasedBooks = await UserBooksPurchased.find({ user: req.user.id });

    res.status(200).json(purchasedBooks);
});

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

module.exports = {
    registerUser,
    loginUser,
    getMe,
    profile,
    editProfile,
    booksLiked,
    booksPurchased
};