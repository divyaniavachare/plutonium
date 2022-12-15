const mongoose=require('mongoose')
const express=require('express')
const route=require('./routes/route.js')
 const app=express()

app.use(express.json())

mongoose.connect("mongodb+srv://divyani_122:Jauwfm2RmhdpBUMR@cluster0.g956m32.mongodb.net/divyani-DB", {
useNewUrlParser:true
})
.then(()=>console.log("Database Connected"))
.catch(err=> console.log(err))
app.use('/',route)

app.listen(process.env.PORT || 3000,function(){
console.log("Express app running on port"+(process.env.PORT || 3000))
})