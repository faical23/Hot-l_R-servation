const mongoose = require('mongoose');

const Hotel = mongoose.Schema({
    Name:{type:String},
    City:{type:String},
    Email:{type:String},
    Adress:{type:String},
    Phone:{type:String},
    Password:{type:String},
    CoverImg:{type:String},
    Image:{type:Array},
    Website:{type:String},
    Description:{type:String},
    FacbookPage:{type:String},
    Instagram:{type:String},
    Localisation:{x:String,y:String},
    Hashtag:{type:Array},
    Service:{Type:Array},
    Vérified:{Type:Boolean},
    Comment:[{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}],
    TypeHotel:{type:String},
    StartPrice:{type:Number}
},{timestamps:true})  
mongoose.model('Hotel',Hotel);
module.exports = mongoose.model('Hotel', Hotel);