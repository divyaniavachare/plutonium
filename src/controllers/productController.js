const productSchema = require("../models/productModel")

const createProduct = async function (req, res) {
    let productData = req.body;
    let productCreated = await productSchema.create(productData);
    res.send({ data: productCreated });
}

const getProductDetails = async function (req, res) {
    let productData = await productSchema.find();
    res.send({ data: productData });
}


module.exports = { createProduct, getProductDetails }
