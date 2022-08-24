const bookModel = require("../models/bookModel")
const authorModel = require("../models/newAuthor")
const publisherModel = require("../models/newPublisher")


const createBook = async function (req, res) {
    let bk = req.body;
    if (!bk.author) { return res.send("AuthorId detail is not found") };
    if (!bk.publisher) { return res.send("PublisherId detail is not found") };
    let checkIdOfAuthor = await authorModel.findById(bk.author)
    let checkIdOfpublisher = await publisherModel.findById(bk.publisher)
    if (!checkIdOfAuthor) { return res.send("Author is not present.") };
    if (!checkIdOfpublisher) { return res.send("Publisher is not present.") };
    let bookCreated = await bookModel.create(bk);
    res.send({ data: bookCreated });
};



const allDetails = async function (req, res) {
    let specificBook = await bookModel.find()

    res.send({ data: specificBook })
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(["author", "publisher"])
    res.send({ data: specificBook })

}



module.exports.createBook = createBook
module.exports.allDetails = allDetails
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
// module.exports.updateNewBook = updateNewBook
// module.exports.updatePriceOfBook = updatePriceOfBook
