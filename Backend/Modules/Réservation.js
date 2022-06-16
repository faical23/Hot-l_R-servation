const mongoose = require('mongoose');
const Réservation = mongoose.Schema({
    Hotel:{type:mongoose.Schema.Types.ObjectId,ref:'Hotel'},
    Client:{type:String},
    Total:{type:Number},
    DateStart:{type:Date},
    DateEnd:{type:Date},
    Payed:{type:Boolean},
    Room:{type:String},
    Durée:{type:String},
},{timestamps:true})
mongoose.model('Réservation',Réservation);

module.exports = mongoose.model('Réservation', Réservation);