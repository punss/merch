const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Size = new Schema({
    XSmall: { type:Number, required: false },
    Small: { type:Number, required: false },
    Medium: { type:Number, required: false },
    Large: { type:Number, required: false },
    XLarge: { type:Number, required: false },
    XXLarge: { type:Number, required: false },
    XXXLarge: { type:Number, required: false },
})

const Person = new Schema ({
    id: {type: String, required: true},
    name: { type: String, required: true },
    size: { type: Size, required: true },
    Collected: { type:Boolean, required: false },

})

module.exports = mongoose.model('Person', Person);