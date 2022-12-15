let jwt=require('jsonwebtoken')
const teacherModel = require('../models/teacherModel')

const authentication=async function (req,res,next){
    try{
    let token=req.headers['x-api-key']
   if (!token) return res.send({msg:"token must be present"})
   let decode=jwt.verify(token,"mysecurity")
   if(!decode) return res.status(401).send({status:false,msg:"token is invalid"})

   req.decode=decode
   next()
} catch(err){
 res.status(500).send({status:false,msg:err.message})
}
}



// const authorization=async function(req,res,next){
//     try{
//     let teacherId=req.params.teacherId
//     let teacherIdfromtoken=req.decode.teacherId
//     let findteacher=await teacherModel.findById(teacherId)
//     if (!findteacher) return res.send({msg:"teacher not found"})
//     if(findteacher.teacherId !==teacherIdfromtoken)
//     return res.status(403).send({msg:"unauthorized teacher"})
//     next()
// } catch{
//     res.status(500).send({status:false,message:err.message})
// }
// }





// const authorization = async (req, res, next) => {
//     try {
//         let token = req.headers["x-api-key"]
//         let decodeToken = jwt.verify(token, "mysecurity")
//         let teacherLoggedIn = decodeToken.teacherId

//         let teacherId = req.params.teacherId
//         // if(!mongoose.Types.ObjectId.isValid(bookId)){
//         //     return res.status(400).send({status: false, message : "BookId is Invalid, Please Enter Correct Id"})
//         // }

//         let saveBook = await teacherModel.findById(teacherId)
//         if(!saveBook){
//             return res.status(404).send({status: false, message: "No teacher found"})
//         }

//         if(saveBook.teacherId.toString() !== teacherLoggedIn){
//             return res.status(403).send({status: false, message: " unthorised teacher..!!"})
//         }

//         next();

//     }
//     catch (err) {
//         return res.status(500).send({ status: false, message: err.message });
//     }
// }

const authorization=async function (req,res,next){
    let token=req.headers["x-api-key"]
    let checktoken=jwt.verify(token,"mysecurity")
    let teacherId=req.params.teacherId
    let studentId=req.params.studentId
    let loggedin=checktoken.teacherId
    if(teacherId !==loggedin || studentId !==loggedin)res.send({msg:"unauthorized"})
       next()
}







module.exports={authentication,authorization}