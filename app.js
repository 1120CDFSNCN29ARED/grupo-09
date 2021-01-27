const express = require('express');
const app = express();

const path = require('path');

app.listen(3002, () => {
    console.log('Server is live. Port 3002.');
});

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.get('/product', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});
app.get('/registration', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/registration.html'));
});
app.get('/cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/shoppingCart.html'));
});