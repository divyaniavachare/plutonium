const bookModel = require("../models/bookModel.js");

const createBook = async function (req, res) {
  let data = req.body;
  let savedData = await bookModel.create(data);
  res.send({ books: savedData });
};

module.exports.createBook = createBook;
