const express = require('express');

const app = express();
const port = 3000;

const callback = () => console.log(`Server started on port ${port}`);

app.listen(port, callback);