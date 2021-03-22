const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const methodOverride = require('method-override');

const routesIndex = require("./routes/index");
const routesUsers = require("./routes/users");
const routesProducts = require("./routes/products");

app.use("/", routesIndex);
app.use("/users", routesUsers);
app.use("/products", routesProducts);

app.listen(3002, () => {
    console.log('Server is live. Port 3002.');
});

app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "views"));

app.use(express.static(publicPath));
app.use(express.static('public'));
app.use(methodOverride('_method'));

module.exports = app;
