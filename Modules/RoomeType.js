const mongoose = require('mongoose');
const RoomType = mongoose.Schema({
    Name:{type:String},
},{timestamps:true})
mongoose.model('RoomType',RoomType);

module.exports = mongoose.model('RoomType', RoomType);