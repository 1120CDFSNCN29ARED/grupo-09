const fs = require('fs');
const path = require('path');

const db = require('../database/models');

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
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    res.render('products', { products });
  },
 /*
  index: (req, res) => {
    db.Products.findAll()
      .then(function(products){
        res.render('products', {products})
      })
  },
  showProduct: (req, res) => {
    db.Products.findByPk(req.params.id)
    .then(product) {
      res.render('productDetail', { product });
    },
  },
    createNewProduct: (req, res) => {
    db.Products.create({
      name: req.body.name,
      continent: req.body.continent,
      description: req.body.description,
      unitPrice: req.body.unitPrice,
      image: req.file.filename,
    })
  },
  edit: (req, res) => {
    db.Products.findByPk(req.params.id)
      .then(function(product) {
        res.render('editProduct', { product })
      })
  },
  update: (req, res) => {
    db.Products.update({
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
  },
  deleteProduct: (req, res) => {
    db.Products.destroy({
      where: {
        id: req.params.id
      }
    })
  },
 */

  showProduct: (req, res) => {
    const id = req.params.id;
    let product = {};
    for (i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        product = products[i];
      }
    }
    res.render('productDetail', { product });
  },

  createForm: (req, res) => {
    res.render('createProduct');
  },

  createNewProduct: (req, res) => {
    let newProd = req.body;
    newProd.image = req.file.filename;
    let greatestId = 0;
    products.map(product => { product.id > greatestId ? greatestId = product.id : '' });
    newProd.id = greatestId + 1;
    products.push(newProd);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 4));
    console.log('********* CREATION SUCCESSFUL **************');
    res.redirect('/');
  },
  deteProduct: (req, res) => {
    console.log('EL ID ES '+req.params.id);
    let remainingProducts = products.filter(product => product.id != req.params.id);
    fs.writeFileSync(productsFilePath, JSON.stringify(remainingProducts, null, 4));
    console.log('********* DELETION SUCCESSFUL **************');
    res.redirect('/');
  },
  edit: (req, res) => {
    const id = req.params.id;
    let product = {};
    for (i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        product = products[i];
      }
    }
    console.log('********* EDITION SUCCESSFUL **************');
    res.render('editProduct', { product });
  },

  update: (req, res) => {
    for (i = 0; i < products.length; i++) {
      if (products[i].id == req.params.id) {
        Object.keys(products[i]).forEach(function (key) {
          if (
            products[i][key] != products[i].id) {
            products[i][key] = req.body[key];
          }
        });
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 4));
      }
    }
    res.redirect('/');
  },
};

module.exports = productsController;
