const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../../database/models');

const usersFilePath = path.resolve(__dirname, '../../Users.json');

const bcrypt = require('bcryptjs');
//const { delete } = require("../app");

const usersController = {
  index: (req, res) => {
    db.Users.findAll()
      .then(function(users){
        res.render('users', {users})
      })
  },

  loginForm: (req, res) => {
    res.render('login');
  },

  registrationForm: (req, res) => {
    res.render('registration');
  },

  profile: (req, res) => {
        res.render('profile', {user: req.session.userLogged});
  },

  registration: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('registration', {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    let email = req.body.email;
    db.Users.findOne({
      where: {
        email: email
      }
    }).then((result) => {
      if (result) {
        return res.render('registration', {
          errors: {
            email: {
              msg: 'Email ya registrado',
            },
          },
          oldData: req.body,
        })
    }});

    if (req.body.confirmPassword == req.body.password) {
      let newUser = db.Users.create({
        names: req.body.names,
        email: req.body.email,
        address: req.body.address,
        password: bcrypt.hashSync(req.body.password, 10),
        image: req.file.filename,
      })
      console.log(newUser);
      console.log('********* CREATION SUCCESSFUL **************');
      return res.render('profile', { user: newUser });
    } else {
      return res.render('registration', {
        errors: 'Las contraseñas no coinciden.',
        oldData: req.body,
      });
    }
  },

  login: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('login', {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    let enteredUser = req.body.user;
        let enteredPassword = req.body.password;
        let user = users.find((user) => user.email == enteredUser);
    
    if (!user) {
      return res.render('login', {
        errors: {
          user: {
            msg: 'El email no pertenece a un usuario registrado.',
          },
        },
        oldData: req.body,
      });
    } else {
      enteredPassword = bcrypt.compareSync(enteredPassword, user.password);
      if (enteredPassword) {
        delete user.password;
        req.session.userLogged = user;
        res.redirect('profile');
      } else {
        res.render('login', {
          errors: {
            password: {
              msg: 'La contraseña es incorrecta.',
            },
          },
          oldData: req.body,
        });
      }
    }
  },
  updateUserForm: (req, res) => {
    return res.render('profile', {user})
  },

  updateUser: (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('registration', {
      errors: errors.mapped(),
      oldData: req.body,
    });
  };
  if(req.body.confirmPassword == req.body.password) {
    db.Users.update({
      names: req.body.names,
      address: req.body.address,
      password: bcrypt.hashSync(req.body.password, 10),
      image: req.file.filename,
   }, {
     where: {
       id: user.id
     }
   })
    console.log(user);
    console.log('********* UPDATE SUCCESSFUL **************');
    return res.render('profile', { user });
  } else {
    return res.render('registration', {
      errors: 'Las contraseñas no coinciden.',
      oldData: req.body,
    });
  }
},

logout: (req, res)=>{
  req.session.destroy();
  return res.redirect('/');
}

};

module.exports = usersController;
