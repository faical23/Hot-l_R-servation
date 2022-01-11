const mongoose = require('mongoose');
const Room = mongoose.Schema({
    Number:{type:String},
    State:{type:Boolean},
    Block:{type:String},
    Price:{type:String},
    Déscription:{type:String},
    Type:[{type:mongoose.Schema.Types.ObjectId,ref:'RoomType'}],
    Hotel:[{type:mongoose.Schema.Types.ObjectId,ref:'Hotel'}],
    Image:[{type:Array}],
    Bed:[{type:Number}]
},{timestamps:true})
mongoose.model('Room',Room);

module.exports = mongoose.model('Room', Room);