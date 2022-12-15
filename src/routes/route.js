const express=require('express');
const router=express.Router();
const teacherController=require("../controllers/teacherController")
const studentController=require("../controllers/studentController")
const middleware=require('../middleware/middleware')


router.post('/register',teacherController.createteacher)
router.post('/login',teacherController.login)
router.post('/studentregister',middleware.authentication,studentController.createstudent)
router.get('/getstudents/:teacherId/:studentName',middleware.authentication,middleware.authorization,studentController.getstudents)
router.put('/update/:studentName/:subject',middleware.authentication,middleware.authorization,studentController.updatestudent)
router.delete('/deletestudent/:studentId',middleware.authentication,middleware.authorization,studentController.deletestudent)
module.exports=router;

