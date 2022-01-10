const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema({
    hotel: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel'
    },
    block: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        required: true
    }
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room