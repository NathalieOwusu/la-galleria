const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/User');

const router = express.Router();

//Register route
router.post('/signup', async (req, res) => {
    let { username, password } = req.body;

    const connectionState = mongoose.connection.readyState;
    console.log('Connection state:', connectionState);

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Signup error:', error); // Log the error to debug
        res.status(400).json({ error: 'User already exists' });
    }
});

//Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error); // Log the error to debug
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports = router;