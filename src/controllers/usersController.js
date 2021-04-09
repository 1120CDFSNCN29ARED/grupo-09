//const { restart } = require("nodemon");
const fs = require("fs");
const path = require("path");

const usersFilePath = path.resolve(__dirname, "../../Users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const bcrypt = require("bcryptjs");


const controlador = {
  index: (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    res.render("users", { users });
  },
  
    loginForm: (req, res) => {
    res.render("login");
  },

  registrationForm: (req, res) => {
    res.render("registration");
  },

  registration: (req, res) => {
   let newUser = {
     names: req.body.names,
     email: req.body.email,
     address: req.body.address,
     password: bcrypt.hashSync(req.body.password, 10),
   };
  newUser.image = req.file.filename;
  let greatestId = 0;
  users.map((user) => {
    user.id > greatestId ? (greatestId = user.id) : "";
  });
  newUser.id = greatestId + 1;
  users.push(newUser);
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 4));
  console.log("********* CREATION SUCCESSFUL **************");
  res.redirect("/users");
  },
};

module.exports = controlador;