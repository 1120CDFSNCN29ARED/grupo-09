const express = require('express');

const path = require('path');
const app = express();


app.listen(3002, () => {
    console.log('Server is live. Port 3002.');
});

app.use(express.static('public'));