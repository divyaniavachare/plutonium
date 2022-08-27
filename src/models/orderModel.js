const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const orderSchema = new mongoose.Schema({

    name: String,
    userId: { type: ObjectId, ref: "NewUser" },
    productId: { type: ObjectId, ref: "NewProduct" },
    amount: Number,
    isFreeAppUser: { type: Boolean, default: false },
    date: { type: Date, default: new Date() }

}, { timestamps: true })

module.exports = mongoose.model('NewOrder', orderSchema)