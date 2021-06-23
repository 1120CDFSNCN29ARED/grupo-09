const { name } = require('ejs');
const path = require('path');

const db = require('../../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

  searchProduct: (req, res) => {
    // let urlParams = new URLSearchParams(location.search);
    // let searchQuery = urlParams.get('search');
    // console.log(searchQuery)
    let searchQuery = req.query.search;
    console.log(searchQuery)
    db.Product.findAll({
      where: {
        name: { [Op.like]: '%' + searchQuery + '%' }      
      }
    }).then(function(results) {
      console.log(results)
      if (results) {
        res.render('products', {products: results})
      } else {
        res.redirect('noResults');
      }
    })
  },

  noResults: (req, res) => {
    res.render('noResults');
  }
  
}  

module.exports = productsController;
