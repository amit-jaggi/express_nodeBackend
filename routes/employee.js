const express = require("express");
const employeeRouter = express.Router();
const employeeController = require("../controllers/employee")

employeeRouter.route("/")
    .get(employeeController.sendEmployee)

module.exports = employeeRouter