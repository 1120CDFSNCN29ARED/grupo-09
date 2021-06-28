const db = require('../../../database/models');
const path = require('path');

const imgPath = path.resolve(__dirname, '../../public/img/users/');

const usersApiController = {

  'index': (req, res) => {
    db.User.findAll({ attributes: ['id', 'names', 'email', 'image'] })
      .then(users => {
        users.forEach(user => {
          user.dataValues.profileUrl = 'http://localhost:3002/api/users/' + user.id;
          user.dataValues.image = imgPath + user.image;
        });

        let response = {
          status: 200,
          count: users.length,
          data: users,
        }
        res.json(response);
      })
  },

  'profile': (req, res) => {
    db.User.findByPk(req.params.id, { attributes: ['id', 'names', 'email', 'image'] })
      .then(user => {
        let response = {
          status: 200,
          url: 'api/users/' + req.params.id,
          data: {
            id: user.id,
            names: user.names,
            email: user.email,
            image: imgPath + user.dataValues.image,
          },
        }
        res.json(response);
      });
  },

};

module.exports = usersApiController;