const newAuthor = require("../models/newAuthor")
const publisherModel = require("../models/newPublisher")

const createPublisher = async function (req, res) {
    let newPublisher = req.body
    let publisherCreated = await publisherModel.create(newPublisher)
    res.send({ data: publisherCreated })
}

const getPublisher = async function (req, res) {
    let publisherData = await publisherModel.find()
    res.send({ data: publisherData })
}

module.exports.createPublisher = createPublisher
module.exports.getPublisher = getPublisher


