const express = require('express');
const mainRouter = express.Router();    // module which allows us to create child routes or end points for the api
const productRouter = require("./products");
const employeeRouter = require("./employee")

mainRouter.use("/products", productRouter); // append the child routes
mainRouter.use("/employee", employeeRouter); // append the child routes

module.exports = mainRouter