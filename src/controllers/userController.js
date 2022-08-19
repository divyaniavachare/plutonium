const authorModel = require("../models/authorModel.js");
const bookModel = require("../models/bookModel.js");
// =================================2===================================//
const getAllData = async function (req, res) {
    let data = await authorModel.findOne({ author_name: "Chetan Bhagat" }).select({ author_id: 1 });
    let getData = await bookModel.find({ author_id: { $eq: data.author_id } });
    res.send({ bookInfo: getData });
};
// =================================3===================================//
const getResult = async function (req, res) {
    let findAuthor = await bookModel.findOneAndUpdate({ name: "Two states" },{ $set: { price: 500 } },{ new: true });
    let updatePrice=await bookModel.findOne({ name: "Two states" }).select({price:1,_id: 0})
    let authorUpdate = await authorModel.findOne({author_id: {$eq:findAuthor.author_id}}).select({ author_name: 1, _id: 0 });
    res.send([ authorUpdate ,updatePrice ]);
};
// ================================4====================================//
const findBook = async function (req, res) {
    let getData = await bookModel.find({ price: { $gte: 50, $lte: 100 } });
  
    let fetch = getData.map((x) => x.author_id);
    let data = await authorModel.find({ author_id: fetch }).select({ author_name: 1, _id: 0 });
      res.send({ allBookInfo: data });
    };
    

// ====================================================================//
module.exports.getAllData = getAllData;
 module.exports.getResult = getResult;
module.exports.findBook = findBook;
