const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const dataDir = path.join(__dirname, '../data');
const usersFile = path.join(dataDir, 'users.json');


function readUsers() {
    const data = fs.readFileSync(usersFile, 'utf-8');
    return JSON.parse(data);
}

const saveUsers = (userData) => {
    fs.writeFileSync(usersFile, JSON.stringify(userData, null, 2));
}

// Middleware to log request details
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

// Sample protected route
router.get('/profile/:id/Name/:name', async (req, res) => {
    try {
        const { id, name } = req.params;
        const usersData = readUsers();
        const user = usersData.users.find(u => u.id === id && u.name === nam);
        if (user) {
            res.json(user);
        } else {
            const newUser = { id, name, role: 'User', createdAt: new Date().toISOString() };
            usersData.users.push(newUser);
            saveUsers(usersData);
            res.status(201).json(newUser);
        }
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
});

module.exports = router;