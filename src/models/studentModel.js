const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const studentSchema = new mongoose.Schema({

    studentName: {
        type: String,
        required: true,
        unique: true
    },
    marks: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
    },
    teacherId: {
        type: ObjectId,
        ref: "teacher"

    },
    isdeleted:{
        type:Boolean,
        default:false
      }
}, { timestamps: true });

module.exports = mongoose.model("students", studentSchema)