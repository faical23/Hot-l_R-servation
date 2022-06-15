const mongoose = require('mongoose');
const Comment = mongoose.Schema({
    Comment:{type:String},
    Name:{type:String},
    Hotel:{type:mongoose.Schema.Types.ObjectId,ref:'Hotel'},
},{timestamps:true})
mongoose.model('Comment',Comment);
module.exports = mongoose.model('Comment', Comment);