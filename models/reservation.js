const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservationSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    room: [{
        type: Schema.Types.ObjectId,
        ref: 'Room'
    }],
    uniqueCode: {
        type: String,
        required: true
    },
    dateStart: {
        type: Date,
        required: true
    },
    dateEnd: {
        type: Date,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    State: {
        type: Boolean,
        required: true
    }
})

const Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = Reservation