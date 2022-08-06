const express = require("express");
const one = require("../logger/logger");
const two = require("../util/helper");
const three = require("../validator/formatter");
const router = express.Router();

router.get("/test-me", function (req, res) {

  console.log(".........................");
  one.problem1();
  console.log(".........................");
  two.problem2();
  console.log(".........................");
  three.problem3();

  
  res.send("My second ever api!");
});

// router.get('/test-you', function(req, res){
//     res.send('This is the second routes implementation')
// })

router.get("/give-me-students-data", function (req, res) {});
module.exports = router;
// adding this comment for no reason
