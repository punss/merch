const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db')
const router = require('./routes/api-router')

const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended:true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, "Mongoose connection error: "));

app.get('/', (req,res) => {
    res.send('/api/person -> Search <br> /api/add -> Add Sample Person')
    })

app.use('/api', router)

app.listen(apiPort, () => console.log(`App running on port ${apiPort}`))
