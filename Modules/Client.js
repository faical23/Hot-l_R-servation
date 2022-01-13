const mongoose = require('mongoose');
const Client = mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Phone:{type:String},
    Hotel:{type:mongoose.Schema.Types.ObjectId,ref:'Hotel'},
},{timestamps:true})
mongoose.model('Client',Client);
module.exports = mongoose.model('Client', Client);