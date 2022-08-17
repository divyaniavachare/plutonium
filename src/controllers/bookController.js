const books = require("../bookModel/bookController");
// 
const bookInput = async function (req, res) {
  let data = req.body;
  let savedData = await books.create(data);
  res.send({ bookInfo: savedData });
};
// =bookList=
const GetallData = async function (req, res) {
  let allBooksData = await books.find({
    bookName: "Data structure",
    authorName: "DN",
  });
  res.send({ allBookInfo: allBooksData });
};
// =getBooksInYear=
const getBooksInYear = async function (req, res) {
  let data = req.query.year;
  let yearData = await books
    .find({ year: data })
    .select({ bookName: 1, _id: 0 });
  res.send({ bookInfo: yearData });
};
// =getParticularBooks=
const getParticularBooks = async function (req, res) {
  let data = req.body;
  let yearData = await books.find(data).select({ bookName: 1, _id: 0 });
  res.send(yearData);
};
// ==getXINRBooks===
const getXINRBooks = async function (req, res) {
  let allBooksData = await books
    .find({ "price.indianRupees": { $in: ["₹222", "₹25", "₹50"] } })
    .select({ bookName: 1, _id: 0 });
  res.send({ allBookInfo: allBooksData });
};
// ==getRandomBooks===
const getBooks = async function (req, res) {
  let allBooksData = await books
    .find({ totalPages: { $gte: 500 }, stockAvailable: true })
    .select({ bookName: 1, _id: 0 });
  res.send({ allBookInfo: allBooksData });
};
module.exports.createBook = bookInput;
module.exports.bookList = GetgiallData;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getBooks;