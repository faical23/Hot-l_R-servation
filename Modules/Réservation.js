const mongoose = require('mongoose');
const Réservation = mongoose.Schema({
    Hotel:{type:mongoose.Schema.Types.ObjectId,ref:'Hotel'},
    Client:{type:mongoose.Schema.Types.ObjectId,ref:'Client'},
    Total:{type:Number},
    DateStart:{type:Date},
    DateEnd:{type:Date},
    Payed:{type:Boolean},
    Room:{type:Array},
    Durée:{type:String},
},{timestamps:true})
mongoose.model('Réservation',Réservation);

module.exports = mongoose.model('Réservation', Réservation);