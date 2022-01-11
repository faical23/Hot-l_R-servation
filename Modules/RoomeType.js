const mongoose = require('mongoose');
const RoomType = mongoose.Schema({
    Name:{Type:String},
    Hotel:[{type:mongoose.Schema.Types.ObjectId,ref:'Hotel'}],

},{timestamps:true})
mongoose.model('RoomType',RoomType);

module.exports = mongoose.model('RoomType', RoomType);