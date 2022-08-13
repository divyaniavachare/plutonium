const booksName = require("../bookingSchema/bookingSchema");

const userInput = async function (req, res) {
  let data = req.body;
  let savedData = await booksName.create(data);
  res.send({ bookInfo: savedData });
};

const allData = async function (req, res) {
  let allBooksData = await booksName.find();
  res.send({ allBookInfo: allBooksData });
};

module.exports.booksName = userInput;
module.exports.allBooksName = allData;
