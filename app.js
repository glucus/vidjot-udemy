const express = require('express');

const app = express();
const port = 3000;

const listenCallback = () => console.log(`Server started on port ${port}`);

// middleware example
app.use((req, res, next) => {
    req.name = 'stranger';
    next(); // to run the next middleware
});

// index route
const indexCallback = (req, res) => res.send(`Hello, ${req.name}! Welcome to vidjot`);
app.get('/', indexCallback);

// about route
app.get('/about', (req, res) => res.send('Vidjot is an app create to store your videos ideas'));

app.listen(port, listenCallback);