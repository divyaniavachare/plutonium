const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel.js");
const UserController = require("../controllers/userController");

const data = require("../bookingFunction/bookingFunction");
router.post("/usersBookData", data.booksName);
router.get("/getAllBooksData", data.allBooksName);

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createUser", UserController.createUser);

router.get("/getUsersData", UserController.getUsersData);

module.exports = router;
