const mongoose = require('mongoose')

// model
const userSchema = mongoose.Schema({
    id: Number,
    name: {
        type: String,
    },
    tel: {
        type: Number,
    },
    email: {
        type: String
    }
},{timestamps: true})

module.exports = mongoose.model('users', userSchema)