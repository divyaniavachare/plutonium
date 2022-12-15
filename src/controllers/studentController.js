const mongoose = require('mongoose')
const studentModel = require('../models/studentModel')
const validator = require('../validator/validation')

const createstudent = async function (req, res) {
  try  {
    let data = req.body
    let { studentName, marks, subject } = data
    if (!studentName) return res({ status: false, msg: "please enter student name" })
    let checkName = validator.validString(studentName);
    if (!checkName) return res.send({ status: false, msg: "studentName is not valid" })
    if (!marks) return res.send({ status: false, msg: "please enter marks" })
    let checkMarks = validator.validMarks(marks);
    if (!checkMarks) return res.send({ satus: false, msg: "enter valid marks" })
    if (!subject) return res.send({ status: false, msg: "please enter subject" })
    let checkSubject = validator.validString(subject);
    if (!checkSubject) return res.send({ status: false, msg: "subject is not valid" })
    let savedData = await studentModel.create(data);
    res.status(201).send({status:true, studentsdata: savedData })
}catch (err) {
    res.status(500).send({msg:err.message})
}
}




const getstudents = async function (req, res) {
    try{
    let teacherId = req.query.teacherId
    let studentName = req.query.studentName
    let checkName = validator.validString(studentName);
    if (!checkName) return res.send({ status: false, msg: "studentName is not valid" })
    let getdata = await studentModel.findOne({ teacherId: teacherId, studentName: studentName })
    if(!getdata) return res.send({msg:"No student found"})
    res.status(200).send({status:"true" ,msg: getdata })
}
catch(err){
    res.status(500).send({msg:"err.message"})
}
}
//==================================================================================================
const updatestudent = async function (req, res) {
    try{
    let data = req.body
    let { marks, studentName, subject } = data
    subject = req.params.subject
    studentName = req.params.studentName
    let checkSubject = validator.validString(subject);
    if (!checkSubject) return res.send({ status: false, msg: "subject is not valid...please enter in string" })
    let checkName = validator.validString(studentName);
    if (!checkName) return res.send({ status: false, msg: "studentName is not valid...please enter in string" })
    let updatedata = await studentModel.findOneAndUpdate({ subject: subject, studentName: studentName },
        { $inc: { marks: +data.marks } }, { new: true })
    res.status(200).send({ msg: updatedata })
}
catch{
    res.status(500).send({status:false,msg:"err.message"})
}
}

const deletestudent=async function(req,res){
    try{
    studentId=req.params.studentId
    let deletedata=await studentModel.findById(studentId)
    if(!deletedata)return res.send({msg:"No student found with this Id"})
    if(deletedata.isdeleted) return res.send({msg :"Already deleted..."})
    let update =await studentModel.findByIdAndUpdate(studentId,{$set:{isdeleted:true}},{new:true})
    res.status(200).send({msg:"Deleted successfully",update})
}
catch{
    res.status(500).send({status:false,msg:"err.message"})
}
}


module.exports.deletestudent=deletestudent
module.exports.createstudent = createstudent
module.exports.getstudents = getstudents
module.exports.updatestudent = updatestudent