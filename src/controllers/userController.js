const userSchema = require("../models/userModel")

const createUser = async function (req, res) {
    let userData = req.body;
    let userCreated = await userSchema.create(userData);
    res.send({ data: userCreated });
}

const getUser = async function (req, res) {
    let userData = await userSchema.find();
    res.send({ data: userData });
}


module.exports = { createUser, getUser }
