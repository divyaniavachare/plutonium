const books = require("../bookModel/bookModel");
// ==========================createBook=============================
const bookInput = async function (req, res) {
  let data = req.body;
  let savedData = await books.create(data);
  res.send({ bookInfo: savedData });
};
// ==========================bookList=============================
const allData = async function (req, res) {
  let allBooksData = await books.find({
    bookName: "FunctionUP",
    authorName: "RKS",
  });
  res.send({ allBookInfo: allBooksData });
};
// ==========================getBooksInYear=============================
const getBooksInYear = async function (req, res) {
  let data = req.query.year;
  let yearData = await books
    .find({ year: data })
    .select({ bookName: 1, _id: 0 });
  res.send({ bookInfo: yearData });
};
// ==========================getParticularBooks=============================
const getParticularBooks = async function (req, res) {
  let data = req.body;
  let yearData = await books.find(data).select({ bookName: 1, _id: 0 });
  res.send(yearData);
};
// ==========================getXINRBooks=============================
const getXINRBooks = async function (req, res) {
  let allBooksData = await books
    .find({ "price.indianRupees": { $in: ["₹200", "₹250", "₹500"] } })
    .select({ bookName: 1, _id: 0 });
  res.send({ allBookInfo: allBooksData });
};
// ==========================getRandomBooks=============================
const getBooks = async function (req, res) {
  let allBooksData = await books
    .find({ totalPages: { $gte: 500 }, stockAvailable: true })
    .select({ bookName: 1, _id: 0 });
  res.send({ allBookInfo: allBooksData });
};
// =================================Export-Modules====================================
module.exports.createBook = bookInput;
module.exports.bookList = allData;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getBooks;