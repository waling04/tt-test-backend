const express = require('express')
const router = express.Router()
const {list, read, create, update, remove} = require('../Controllers/users')

router.get('/users', list)
router.get('/users/:id', read)
router.post('/users', create)
router.put('/users/:id', update)
router.delete('/users/:id', remove)

module.exports = router