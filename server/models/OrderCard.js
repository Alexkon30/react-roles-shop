import mongoose from 'mongoose'

const Order = new mongoose.Schema({
    username: {type: String},
    email: {type: String},
    phone: {type: String},
    address: {type: String},
    goods: [{type: String}],
    isFinished: {type: Boolean, default: false},
})

export default mongoose.model('Order', Order)
