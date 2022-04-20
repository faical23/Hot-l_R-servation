const mongoose = require('mongoose');
const Comment = mongoose.Schema({
    Comment:{type:String},
    Rate:{type:Number}
},{timestamps:true})
mongoose.model('Comment',Comment);
module.exports = mongoose.model('Comment', Comment);