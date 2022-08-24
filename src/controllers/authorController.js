const AuthorModel= require("../models/newAuthor")

const createAuthor= async function (req, res) {
    let newAuthor = req.body
    let authorCreated = await AuthorModel.create(newAuthor)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}
 
const createPublisher=async function(req,res){
    let newPublisher= req.body
    let publisherCreated=await publisherModel.create(newPublisher)
    res.send({data:publisherCreated})
}




module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData