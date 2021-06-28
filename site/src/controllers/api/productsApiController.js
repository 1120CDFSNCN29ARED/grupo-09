const db = require('../../../database/models');
const path = require('path');

const imgPath = path.resolve(__dirname, '../../public/img/maps/');

const productsApiController = {

  'index': (req, res) => {
    db.Product.findAll()
      .then(products => {
        products.forEach(product => {
          product.dataValues.detailUrl = 'http://localhost:3002/api/products/' + product.id;
        });
        let response = {
          status: 200,
          count: products.length,
          data: products,
        }
        res.json(response);
      })
  },

  'productDetail': (req, res) => {
    db.Product.findByPk(req.params.id)
      .then(product => {
        let response = {
          status: 200,
          url: 'api/products/' + req.params.id,
          data: {
            id: product.id,
            name: product.name,
            description: product.description,
            image: imgPath + product.dataValues.image,
            price: product.price,
          },
        }
        res.json(response);
      });
  },

};

module.exports = productsApiController;