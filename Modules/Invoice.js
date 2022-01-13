const mongoose = require('mongoose');
const Invoice = mongoose.Schema({
    Hotel:{type:mongoose.Schema.Types.ObjectId,ref:'Hotel'},
    Client:{type:mongoose.Schema.Types.ObjectId,ref:'Client'},
    Réservation:{type:mongoose.Schema.Types.ObjectId,ref:'Réservation'},
    DateFacture:{type:String},
    PaimentMéthode:{type:String},
},{timestamps:true})
mongoose.model('Invoice',Invoice);

module.exports = mongoose.model('Invoice', Invoice);