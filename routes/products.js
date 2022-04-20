const express = require('express');
const productsRouter = express.Router();
const productController = require('../controllers/products')

productsRouter.route("/")
    .get(productController.sendProduct)

module.exports = productsRouter;