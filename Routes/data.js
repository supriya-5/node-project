
const express = require("express")

const dataController = require("../Controllers/data")


 const dataRouter = express.Router()
//we are linking our data.js file with our /api main


dataRouter.route("/details")

//creating a route

.get(dataController.controllerData)
//calling the data.js in controller folder


module.exports = dataRouter