const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin2024@tt-tester.xigiybt.mongodb.net/')
        console.log('DB Connected!')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB