const mongoose = require('mongoose');
const Room = mongoose.Schema({
    Number:{type:String},
    State:{type:Boolean},
    Block:{type:String},
    Price:{type:String},
    Description:{type:String},
    Type:{type:String},
    Hotel:{type:mongoose.Schema.Types.ObjectId,ref:'Hotel'},
    Image:{type:String},
    Bed:{type:Number}
},{timestamps:true})
mongoose.model('Room',Room);

module.exports = mongoose.model('Room', Room);