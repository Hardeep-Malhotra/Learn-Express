// Import required modules
const mongoose = require('mongoose');   // For connecting and working with MongoDB
const express = require('express');     // For creating server and handling routes
const jwt = require('jsonwebtoken');    // For creating and verifying JWT tokens
const User = require('./userModel.js'); // Importing User model (MongoDB schema)

// Initialize express app
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// ---------------- LOGIN ROUTE ----------------
app.post('/login', async (req, res) => {
    // Extract email, username, and password from request body
    const { email, username, password } = req.body;

    let existingUSer;

    try {
        // Check if user exists in database by email
        existingUSer = await User.findOne({ email });
    } catch {
        // If database query fails
        const error = new Error('Login failed, please try again Later.');
    };

    // If user not found OR password does not match
    if (!existingUSer || existingUSer.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials, could not log you in.' });
    };

    let token;

    try {
        // Generate JWT token with userId and email
        token = jwt.sign(
            {
                userId: existingUSer.id,
                email: existingUSer.email
            },
            "secreatKeyappearshere",   // Secret key for signing token
            { expiresIn: '1h' }        // Token will expire in 1 hour
        );
    } catch (err) {
        console.log(err);
        const error = new Error('Login failed, please try again Later.');
        return res.status(500).json({ message: error.message });
    };

    // Send success response with token
    res.status(200).json({
        success: true,
        data: {
            userId: existingUSer.id,
            email: existingUSer.email,
            token: token
        }
    });
});

// ---------------- SIGNUP ROUTE ----------------
app.post('/signup', async (req, res, next) => {
    // Extract email, username, and password from request body
    const { email, username, password } = req.body;

    // Create new user object
    const newUser = new User({ email, username, password });

    try {
        // Save new user to database
        await newUser.save();
    } catch (err) {
        console.log(err);
        const error = new Error('Signup failed, please try again later.');
        return res.status(500).json({ message: error.message });
    };

    let token;

    try {
        // Generate JWT token for new user
        token = jwt.sign(
            {
                useId: newUser.id,   // ⚠️ Typo here: should be userId not useId
                email: newUser.email
            },
            "secreatKeyappearshere",
            { expiresIn: '1h' }
        )
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Signup failed, please try again later.' });
    };

    // Send success response with token
    res.status(201).json({
        success: true,
        data: {
            userId: newUser.id,
            email: newUser.email,
            token: token
        }
    });
});

// ---------------- PROTECTED ROUTE ----------------
app.get('/access-Resource', (req, res) => {
    // Get authorization header
    const authorized = req.headers.authorization;
    if (!authorized) {
        return res.status(401).json({ success: false, message: "Authorization header missing!" });
    }

    // Extract token from header (Bearer <token>)
    const token = authorized.split(' ')[1];
    if (!token) {
        return res.status(401).json({ success: false, message: "Token is missing!" });
    }

    let decodedToken;
    try {
        // Verify token using secret key
        decodedToken = jwt.verify(token, "secreatKeyappearshere");
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }

    // If token is valid, return user data
    return res.status(200).json({
        success: true,
        data: {
            userId: decodedToken.userId,
            email: decodedToken.email
        }
    });
});

// ---------------- DATABASE CONNECTION ----------------
mongoose
    .connect("mongodb://localhost:27017/testJWTDB") // Connect to MongoDB database
    .then(() => {
        // Start server on port 3000 after successful DB connection
        app.listen("3000", () => {
            console.log("Server is listening on port 3000");
        });
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.log("Error Occurred");
    });