const fs = require("fs");
const path = require("path");

const productsFilePath = path.resolve(__dirname, "../../Products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {
  index: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.render("products", { products });
  },

  showProduct: (req, res) => {
    const id = req.params.id;
    let product = {};
    for (i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        product = products[i];
      }
    }
    res.render("productDetail", { product });
  },

  createForm: (req, res) => {
    res.render("createProduct");
  },

  createNewProduct: (req, res) => {
    let newProd = req.body;
    newProd.id = products.length;
    products.push(newProd);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 4));
    console.log('********* CREATION SUCCESSFUL **************');
    res.redirect("/");
  },

  edit: (req, res) => {
    const id = req.params.id;
    const product = {};
    for (i = 0; i < products.length; i++) {
      if (products[i] == id) {
        product = products[i];
      }
    }
    res.render("editProduct", { product });
  },

  update: (req, res) => {
    for (i = 0; i < products.length; i++) {
      if (products[i].id == req.params.id) {
        Object.keys(products[i]).forEach(function (key) {
          if (
            products[i][key] != products[i].id &&
            products[i][key] != products[i].image
          ) {
            products[i][key] = req.body[key];
          }
        });
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 4));
      }
    }
    res.redirect("/");
  },
  delete: (req, res) => {
    let remainingProducts = products.filter(
      (product) => product.id != req.params.id
    );
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(remainingProducts, null, 4)
    );
    res.redirect("/");
  },
};

module.exports = productsController;
