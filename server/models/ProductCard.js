import mongoose from 'mongoose'

const Product = new mongoose.Schema({
    id: {type: Number},
    title: {type: String},
    price: {type: Number},
    description: {type: String},
    category: {type: String},
    image: {type: String},
    rating: {
        rate: {type: Number},
        count: {type: Number},
    }
})

export default mongoose.model('Product', Product)
