const userModel = require("../models/userModel.js")
const orderModel = require("../models/userModel.js")
const productModel = require("../models/productModel.js")
   
const createOrder= async function (req, res) {
let purchase = req.body
let header = req.headers.isfreeappuser

if (header == "true"){
}
}
module.exports.createOrder = createOrder




