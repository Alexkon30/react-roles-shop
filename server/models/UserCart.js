import mongoose from 'mongoose'

const User = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String}
})

export default mongoose.model('User', User)