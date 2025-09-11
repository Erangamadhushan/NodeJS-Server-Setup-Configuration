const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
// require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dataDir = path.join(__dirname, './data');
const usersFile = path.join(dataDir, 'users.json');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);

}

if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify({users: []}, null, 2));

}


app.get('/', (req, res) => {
    res.send('Root Endpoint is working fine !');
});

app.get('/status', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString(), uptime: process.uptime() });
});

app.get('/health', (req, res) => {
    res.json({ health: 'Healthy', database: 'Connected', services: 'All operational' });
});

// set request params
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ userId, name: 'John Doe', role: 'Admin' });
});

app.get('/user/:userid/book/:bookid', (req, res) => {
    const { userid, bookid } = req.params;
    res.json({ userid, bookid, title: 'Node.js Guide', author: 'Jane Smith' });
});

// set requrest query
app.get('/search', (req, res) => {
    const { q, page = 1, limit = 10 } = req.query;
    // validate query params
    if(!q) {
        return res.status(400).json({ error: 'Query parameter "q" is required' });
    }


    res.json({ query: q, page: Number(page), limit: Number(limit), results: [] });
});

// --------------------------------------------------------------------------------------------------
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});