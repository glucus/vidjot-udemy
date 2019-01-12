const express = require('express');

const app = express();
const port = 3000;

const listenCallback = () => console.log(`Server started on port ${port}`);

// index route
const indexCallback = (req, res) => res.send('Hello! Welcome to vidjot');
app.get('/', indexCallback);

// about route
app.get ('/about', (req, res) => res.send('Vidjot is an app for your videos ideas'));

app.listen(port, listenCallback);