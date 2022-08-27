const NewuserSchema = require("../models/userModel")
const productSchema = require("../models/productModel")
const orderSchema = require("../models/orderModel")



const midHeader = async function (req, res, next) {
    // console.log(req.headers.isfreeappuser)
    const abc = req.headers["isfreeappuser"]
    if (!abc) { return res.send("Missing A Mandatory Header") }
    console.log("midHeader is OK")
    next()
}

const midUserId = async function (req, res, next) {
    let userID = req.body["userId"]
    let checkUserId = await NewuserSchema.findById(userID)
    if (!checkUserId) { return res.send("Please Check UserId") };
    console.log("midUserId is OK")
    next()
}

const midProductId = async function (req, res, next) {
    let productId = req.body["productId"]
    let checkProductId = await productSchema.findById(productId)
    if (!checkProductId) { return res.send("Please Check ProductId") };
    console.log("midProductId is OK")
    next()
}

const midCheckUserData = async function (req, res, next) {
    // let productData = await productSchema.findById(orderData.productId)
    // let userData = await userSchema.findById(orderData.userId)
    if (!req.headers["isfreeappuser"]) {
        return res.send("Order haven't created because of insufficient balance")
    }
    console.log("midCheckUserData is OK")
    next()
}
// ====================
const isFreeAppUser = async function (req, res, next) {
    let bool = req.headers["isfreeappuser"]

    if (bool !== "true" && bool !== "false") {
        console.log(bool)
        return res.send("Header must be in Boolean(i.e true or false)")
    }
    next()
}




module.exports = { midHeader, midUserId, midProductId, midCheckUserData, isFreeAppUser }