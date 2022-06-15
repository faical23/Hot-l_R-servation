const mongoose = require('mongoose');
const Support = mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Subject:{type:String},
    Message:{type:String},
},{timestamps:true})
mongoose.model('Support',Support);
module.exports = mongoose.model('Support',Support );