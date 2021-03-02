const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const methodOverride = require('method-override');

const routesIndex = require("./routes/index");
const routesLogin = require("./routes/login");
const routesProductDetail = require("./routes/productDetail");
const routesProducts = require("./routes/products");
const routesRegistration = require("./routes/registration");
const routesShoppingCart = require("./routes/shoppingCart");
const routesCreateProduct = require("./routes/createProduct");
const routesEditProduct = require("./routes/editProduct");

app.use("/", routesIndex);
app.use("/login", routesLogin);
app.use("/productDetail", routesProductDetail);
app.use("/products", routesProducts);
app.use("/registration", routesRegistration);
app.use("/cart", routesShoppingCart);
app.use("/createProduct", routesCreateProduct);
app.use("/editProduct", routesEditProduct);

app.listen(3002, () => {
    console.log('Server is live. Port 3002.');
});

app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "./src/views"));

app.use(express.static(publicPath));
app.use(express.static('public'));
app.use(methodOverride('_method'));






