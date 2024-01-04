const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const  connectDB = require('./Config/db')

const { readdirSync } = require('fs')
const app = express()

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

// Routes
readdirSync('./Routes').map((r) => app.use('/',require('./Routes/' + r)))

app.listen(8080,()=> console.log('Server is Running on port 8080'))
