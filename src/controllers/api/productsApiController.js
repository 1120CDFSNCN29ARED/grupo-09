const db = require('../../../database/models');

const productsApiController = {

  'index': (req, res) => {
    db.Product.findAll()
      .then(products => {
        let response = {
          status: 200,
          count: products.length,
          url: 'api/products',
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
          data: product,
        }
        res.json(response);
      });
  },

};

module.exports = productsApiController;