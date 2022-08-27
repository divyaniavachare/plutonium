const express = require('express');
const router = express.Router();


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// ============================================================
// ============================================================

const { createUser, getUser } = require("../controllers/userController")
const { createProduct, getProductDetails } = require("../controllers/productController")
const { createOrder, getAllOrderData } = require("../controllers/orderController")
const { midHeader, midUserId, midProductId, midCheckUserData, isFreeAppUser } = require("../middlewares/validation")
// ============================================================

router.post("/createUser", midHeader, midCheckUserData, createUser)
router.get("/getAllUser", getUser)

// ============================================================

router.post("/createProduct", createProduct)
router.get("/getProductDetails", getProductDetails)

// ============================================================

router.post("/createOrder", isFreeAppUser, midHeader, midUserId, midProductId, midCheckUserData, createOrder)
router.get("/getAllOrderData", getAllOrderData)

// ============================================================

module.exports = router;