const express = require('express');
const app = express();

const path = require('path');

const routesIndex = require("./routes/index");
const routesLogin = require("./routes/login");
const routesProductDetail = require("./routes/productDetail");
const routesProducts = require("./routes/products");
const routesRegistration = require("./routes/registration");
const routesShoppingCart = require("./routes/shoppingCart");

app.use("/", routesIndex);
app.use("/login", routesLogin);
app.use("/productDetail", routesProductDetail);
app.use("/productos", routesProducts);
app.use("/registration", routesRegistration);
app.use("/shoppingCart", routesShoppingCart);

app.listen(3002, () => {
    console.log('Server is live. Port 3002.');
});

app.set('view engine', 'ejs');
app.set("views", "./src/views")

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.use(express.static('public'));







