import mongoose from 'mongoose'

const Order = new mongoose.Schema({
    buyerInfo: {
        name: {type: String},
        phone: {type: String},
        email: {type: String},
    },
    goods: [
        {title: {type: String}, 
        count: {type: Number}}
    ],
    isFinished: {type: Boolean},
})

export default mongoose.model('Order', Order)
