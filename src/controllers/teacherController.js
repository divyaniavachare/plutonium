const mongoose = require('mongoose')
const teacherModel = require('../models/teacherModel')
const validator = require('../validator/validation')
const jwt = require('jsonwebtoken')
//******************************************************************************************************************************** */
const createteacher = async function (req, res) {
    try {
        let data = req.body
        let { email, password, teacherName } = data
        if (!email) return res.send({ status: false, msg: "Please enter email" })
        if (!teacherName) return res.send({ msg: "Please enter teacher name" })
        let checkteacherName = validator.validString(teacherName.trim())
        if (!checkteacherName) return res.send({ msg: "Please enter valid teacher name" })
        let checkMail = validator.validemail(email.trim())
        if (!checkMail)
            return res.send({ msg: "Please enter valid email" })
        let uniqueemail = await teacherModel.findOne({ email: email })
        if (uniqueemail) return res.send({ status: false, msg: "email is already present" })
        if (!password)
            return res.send({ status: false, msg: "Enter password" })
        let checkpass = validator.validpassword(password)
        if (!checkpass) return res.send({ msg: "Enter valid password" })
        let savedData = await teacherModel.create(data)
        res.status(201).send({ msg: "Teacher registered sucessfully", Data: savedData })
    } catch {
        res.status(500).send({ msg: "err.message" })
    }
}

//***************************************************************************************************************** */
const login = async function (req, res) {
    try {
        let teacherName = req.body.email
        let password = req.body.password
        if (!teacherName)
            return res.send({ msg: "please enter email" })
        if (!password)
            return res.send({ msg: "please enter password" })
        let teacher = await teacherModel.findOne({ email: teacherName, password: password })
        if (!teacher)
            return res.send({ msg: "username or password incorrecct" })
        let token = jwt.sign({ teacherId: teacher._id.toString() }, "mysecurity")
        res.status(201).send({ msg: "user login sucessfully", data: token })
    } catch (error) {
        res.status(500).send({ msg: "err.message" })
    }
}







module.exports = { login, createteacher }
