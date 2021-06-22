const fs = require('fs');
const path = require('path');

const db = require('../../database/models');

const productsFilePath = path.resolve(__dirname, '../../Products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const formatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 2
});
//formatter.format(n);
const productsController = {
  index: (req, res) => {
    db.Product.findAll()
      .then(function(products){
        console.log(products)
        res.render('products', {products})
      })
  },
  showProduct: (req, res) => {
    db.Product.findByPk(req.params.id)
    .then(function(product) {
      res.render('productDetail', { product });
    })
  },
  
   createForm: (req, res) => {
     res.render('createProduct');
   },
    createNewProduct: (req, res) => {
    db.Product.create({
      name: req.body.name,
      continent: req.body.continent,
      description: req.body.description,
      unitPrice: req.body.unitPrice,
      image: req.file.filename,
      stock: req.body.stock,
    })
      console.log('********* CREATION SUCCESSFUL **************');
      res.redirect('/');
  },

  edit: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then(function(product) {
        res.render('editProduct', { product })
      });
    console.log('********* EDITION SUCCESSFUL **************');
    res.render('editProduct', { product });
  },
  update: (req, res) => {
    db.Product.update({
      name: req.body.name,
      continent: req.body.continent,
      description: req.body.description,
      unitPrice: req.body.unitPrice,
      image: req.file.filename,
    }, {
      where: {
        id: req.params.id
      }
    })
    res.redirect('/');
  },
  
  deleteProduct: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    })
    console.log('********* DELETION SUCCESSFUL **************');
    res.redirect('/');
  },
};

module.exports = productsController;
