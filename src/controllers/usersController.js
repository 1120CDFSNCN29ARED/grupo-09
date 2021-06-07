const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const usersFilePath = path.resolve(__dirname, "../../Users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const bcrypt = require("bcryptjs");
//const { delete } = require("../app");

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

  profile: (req, res) => {
    console.log(req.session.userLogged)
    res.render("profile", {user: req.session.userLogged});
  },

  registration: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("registration", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    let email = req.body.email;
    let userInDB = users.find((oneUser) => oneUser.email == email);
    if (userInDB) {
      return res.render("registration", {
        errors: {
          email: {
            msg: "Email ya registrado",
          },
        },
        oldData: req.body,
      });
    }

    if (req.body.confirmPassword == req.body.password) {
      let greatestId = 0;
      users.map((user) => {
        user.id > greatestId ? (greatestId = user.id) : "";
      });
      let newUser = {
        names: req.body.names,
        email: req.body.email,
        address: req.body.address,
        password: bcrypt.hashSync(req.body.password, 10),
        image: req.file.filename,
        id: greatestId + 1,
      };
      users.push(newUser);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 4));
      console.log("********* CREATION SUCCESSFUL **************");
      return res.render("profile", { user: newUser });
    } else {
      return res.render("registration", {
        errors: "Las contraseñas no coinciden.",
        oldData: req.body,
      });
    }
  },

  login: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("login", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    let enteredUser = req.body.user;
        let enteredPassword = req.body.password;
        let user = users.find((user) => user.email == enteredUser);
    
    if (!user) {
      return res.render("login", {
        errors: {
          user: {
            msg: "El email no pertenece a un usuario registrado.",
          },
        },
        oldData: req.body,
      });
    } else {
      enteredPassword = bcrypt.compareSync(enteredPassword, user.password);
      if (enteredPassword) {
        delete user.password;
        req.session.userLogged = user;
        res.redirect("profile");
      } else {
        res.render("login", {
          errors: {
            password: {
              msg: "La contraseña es incorrecta.",
            },
          },
          oldData: req.body,
        });
      }
    }
  },
};

module.exports = controlador;
