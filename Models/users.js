const mongoose = require('mongoose')

// model
const userSchema = mongoose.Schema({
    number: {
        type: String, required: true, unique: true
    },
    firstName: {
        type: String,required: true
    },
    lastName: {
        type: String,required: true
    },
    tel: {
        type: String,required: true
    },
    email: {
        type: String,required: true
    }
    // createdAt and updatedAt
},{timestamps: true})

module.exports = mongoose.model('users', userSchema)