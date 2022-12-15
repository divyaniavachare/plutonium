const mongoose=require('mongoose')


let validString=function(studentName){
    if(/^[A-Za-z]{3,15}/.test(studentName))return true
    return false
}

const validpassword=function(password){
    if(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/.test(password))return true
    return false
}

const validemail=function(email){
    if(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email))return true
    return false
}

const validMarks=function(marks){
    if(/^[0-9]*[1-9][0-9]*$/.test(marks))return true
    return false
}
const isValidId = function (data) {
    return mongoose.Types.ObjectId.isValid(data);
  };

module.exports={validString,validemail,validpassword,validMarks,isValidId}