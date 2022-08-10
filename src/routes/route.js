const express = require("express");
const abc = require("../introduction/intro");
const router = express.Router();

//problem:01
router.get("/movies", function (req, res) {
  let movies = ["don", "uri", "sairat", "tani"];
  res.send(movies);
  console.log(movies);
});

//problem:02
router.get("/movies/:indexNumber", function (req, res) {
  const movies = ["don", "uri", "sairat", "tani"];
  let indexNo = req.params.indexNumber;
  //problem:03
  if (indexNo < 0 || indexNo >= movies.length) {
    return res.send("Invalid Index No");
  }
  let moviesName = movies[indexNo];
  res.send(moviesName);
});

//problem:04

router.get("/films", function (req, res) {
  const films = [
    {
      id: 1,
      name: "don",
    },
    {
      id: 2,
      name: "sairat",
    },
    {
      id: 3,
      name: "uri",
    },
    {
      id: 4,
      name: "tani",
    },
  ];
  res.send(films);
});
//problem :05
router.get("/films/:filmId", function (req, res) {
  const films = [
    {
      id: 1,
      name: "don",
    },
    {
      id: 2,
      name: "sairat",
    },
    {
      id: 3,
      name: "uri",
    },
    {
      id: 4,
      name: "tani",
    },
  ];

  let filmId = req.params.filmId;

  for (let i = 0; i < films.length; i++) {
    let film = films[i];
    if (film.id == filmId) {
      return res.send(film);
    }
  }
  res.send("the film id does not match any movie");

  console.log("filmId receives is", filmId);
  res.send("dummy");
});

//problem:01
//-write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
router.get("/sol1", function (req, res) {
  //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
  let arr = [1, 2, 3, 5, 6, 7];

  let total = 0;
  for (var i in arr) {
    total = total + arr[i];
  }

  let lastDigit = arr.pop();
  let consecutiveSum = (lastDigit * (lastDigit + 1)) / 2;
  let missingNumber = consecutiveSum - total;

  res.send({ data: missingNumber });
});

//problem 02

// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
router.get("/sol2", function (req, res) {
  // logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
  let arr = [33, 34, 35, 37, 38];
  let len = arr.length;

  let total = 0;
  for (var i in arr) {
    total += arr[i];
  }

  let firstDigit = arr[0];
  let lastDigit = arr.pop();
  let consecutiveSum = ((len + 1) * (firstDigit + lastDigit)) / 2;
  let missingNumber = consecutiveSum - total;

  res.send({ data: missingNumber });
});

module.exports = router;
