const mongoose = require('mongoose')
mongoose
    .connect('mongodb://127.0.0.1:27017/merchandise', { useNewUrlParser: true, useUnifiedTopology:true })
    .catch(e => {
        console.error('Error message', e.message)
    })

const db = mongoose.connection

module.exports = db
