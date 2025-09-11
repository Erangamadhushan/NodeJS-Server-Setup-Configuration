const express = require('express');
const path = require('path');

const router = express.Router();

const dataDir = path.join(__dirname, '../data');
const usersFile = path.join(dataDir, 'users.json');

// Middleware to log request details
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

// Sample protected route
router.get('/profile', (req, res) => {
    // In a real application, you would verify the user's authentication status here
    res.json({ user: 'John Doe', role: 'Admin' });
});

module.exports = router;