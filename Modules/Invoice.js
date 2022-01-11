const mongoose = require('mongoose');
const Invoice = mongoose.Schema({
    DateFacture:[{type:String}],
    PaimentMéthode:[{type:String}]
},{timestamps:true})
mongoose.model('Invoice',Invoice);

module.exports = mongoose.model('Invoice', Invoice);