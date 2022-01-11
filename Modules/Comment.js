const mongoose = require('mongoose');
const Comment = mongoose.Schema({
    Comment:{type:String},
    Hotel:[{type:mongoose.Schema.Types.ObjectId,ref:'Hotel'}],
    Rate:[{type:Number}]
},{timestamps:true})
mongoose.model('Comment',Comment);

module.exports = mongoose.model('Comment', Comment);