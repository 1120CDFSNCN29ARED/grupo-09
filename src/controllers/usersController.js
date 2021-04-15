const fs = require("fs");
const path = require("path");
const { validationResult } = require('express-validator');

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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.render('registration', {
        errors: errors.mapped(),
        oldData: req.body,
      });
    } else {
      let greatestId = 0;
      users.map((user) => {
        user.id > greatestId ? (greatestId = user.id) : '';
      });
      let newUser = {
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
        image: req.file.filename,
        id: greatestId + 1,
      };
      users.push(newUser);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 4));
      console.log("********* CREATION SUCCESSFUL **************");
      res.send('********* CREATION SUCCESSFUL **************')
//      res.redirect("/users/register");
    }
  },
};

module.exports = controlador;