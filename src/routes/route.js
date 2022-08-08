const express = require("express");
const one = require("../logger/logger");
const two = require("../util/helper");
const three = require("../validator/formatter");
const loadash = require("lodash");
const router = express.Router();

router.get("/test-me", function (req, res) {
  console.log(".........................");
  one.problem1();
  console.log(".........................");
  two.problem2();
  console.log(".........................");
  three.problem3();
  console.log("===========================================");
  //problem:1
  const months = [
    "jan",
    "feb ",
    "march",
    "april",
    "may",
    "june",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  console.log(loadash.chunk(months, [(size = 3)]));
  console.log("===========================================");
  //problem:02
  const goal = require("lodash");
  const list = [1, 3, 5, 7, 9, 11, 13, 15, 17];

  const result = goal.tail(list);
  console.log(result);
  console.log("===========================================");
  //problem :03

  const arr1 = [2];
  const arr2 = [2];
  const arr3 = [5];
  const arr4 = [5];
  const arr5 = [2];
  const result1 = loadash.union(arr1, arr2, arr3, arr4, arr5);
  console.log(result1);
  console.log("===========================================");
  const pairs = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"],
  ];
  const obj = loadash.fromPairs(pairs);
  console.log(obj);

  res.send("My second ever api!");
});
router.get("/cohort ");

// router.get('/test-you', function(req, res){
//     res.send('This is the second routes implementation')
// })

router.get("/give-me-students-data", function (req, res) {});
module.exports = router;
