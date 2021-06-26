const db = require('../../../database/models');

const usersApiController = {

    'index': (req, res) => {
        db.User.findAll({ attributes: ['id', 'names', 'email', 'address', 'image'] })
            .then(users => {
                let response = {
                    status: 200,
                    count: users.length,
                    url: 'api/users',
                    data: users,
                }
                res.json(response);
            })
    },

    'profile': (req, res) => {
        db.User.findByPk(req.params.id, { attributes: ['id', 'names', 'email', 'address', 'image'] })
            .then(user => {
                let response = {
                    status: 200,
                    url: 'api/users/' + req.params.id,
                    data: user,
                }
                res.json(response);
            });
    },

};

module.exports = usersApiController;