const express = require('express')
const router = express.Router()

const {list} = require('../Controllers/users')

// read
router.get('/users', list)

module.exports = router