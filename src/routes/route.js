const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const middleware = require("../middleware/middleware.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middleware.mid1, userController.getUserData)

router.put("/users/:userId", middleware.mid1, userController.updateUser)
router.delete("/delete/:userId", middleware.mid1, userController.deleteUser)
module.exports = router;


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzBiNjk5Y2NiMDBjNDg4YTQ0YmNjNTEiLCJiYXRjaCI6IlBsdXRvbml1bSIsIm9yZ2FuaXNhdGlvbiI6IkZ1bmN0aW9uLVVwIiwiaWF0IjoxNjYxNjk1MDc3fQ.05XXYccmqWaRhxDIEduN4h6o9OknZafKTBCnM5pPFdw