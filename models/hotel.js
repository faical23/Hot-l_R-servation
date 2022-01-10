const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel