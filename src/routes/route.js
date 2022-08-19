const express = require("express");
const router = express.Router();
const createAuthor = require("../controllers/authorController");
const createBook = require("../controllers/bookController");
const userInfo = require("../controllers/userController");
// ========================================================================

router.post("/createBook", createBook.createBook);
router.post("/createAuthor", createAuthor.createAuthor);
router.get("/getAllData", userInfo.getAllData);
router.get("/getResult", userInfo.getResult);
router.get("/findBook", userInfo.findBook);

// ========================================================================
module.exports = router;
