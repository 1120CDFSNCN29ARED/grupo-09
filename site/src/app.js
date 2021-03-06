const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userLoggedMiddleware = require("./Middlewares/userLoggedMiddleware");

const routesIndex = require("./routes/index");
const routesUsers = require("./routes/users");
const routesProducts = require("./routes/products");

const apiProductsRouter = require('./routes/api/productsApiRoutes');
const apiUsersRouter = require('./routes/api/usersApiRoutes');

app.use(cors());

require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(publicPath));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use(session({
    secret: 'Antique Maps',
    resave: false,
    saveUninitialized: true,
}));
app.use(cookieParser());
app.use(userLoggedMiddleware);

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use("/", routesIndex);
app.use("/users", routesUsers);
app.use("/products", routesProducts);

app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);

app.listen(3002, () => {
    console.log('Server is live. Port 3002.');
});








module.exports = app;
