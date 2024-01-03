const users = require('../Models/users')

exports.list = async (req, res) => {
    try{
        // code
        // const id = req.params.id
        const userData = await users.find({}).exec()
        res.send(userData)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}