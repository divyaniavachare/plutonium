const express = require("express");
const abc = require("../introduction/intro");
const router = express.Router();

//router.get('/test-me', function (req, res) {
//  console.log('My batch is', abc.name)
// abc.printName()
//logger.welcome()

//res.send('My second ever api!')
//});

//router.get('/students', function (req, res){
//  let students = ['Sabiha', 'Neha', 'Akash']
//res.send(students)
//})

//Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
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

  if (indexNo < 0 || indexNo >= movies.length) {
    return res.send("Invalid Index No");
  }
  let moviesName = movies[indexNo];
  res.send(moviesName);
});

// router.get("/movies", function (req, res) {});
// router.get("/test-me", function (req, res) {
//   res.send("this is second routes implementation");
// });

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

//res.send("hello there")

module.exports = router;
