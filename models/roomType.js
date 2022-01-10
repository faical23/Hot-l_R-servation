const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomTypeSchema = new Schema({
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    name: {
        type: String,
        required: true
    }
})

const RoomType = mongoose.model('RoomType', roomTypeSchema)

module.exports = RoomType