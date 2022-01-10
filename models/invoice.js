const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceSchema = new Schema({
    reservation: {
        type: Schema.Types.ObjectId,
        ref: 'Reservation'
    },
    price: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    factureDate: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    }
})

const Invoice = mongoose.model('Invoice', invoiceSchema)

module.exports = Invoice