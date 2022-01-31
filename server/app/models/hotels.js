const { Schema, model } = require('mongoose');
const HotelSchema = new Schema({
        "name":{
            type:Schema.Types.String,
            required:true,
        },
        "images":[
          {
              type:Schema.Types.String,
              required:false
          }
        ],
        "description":{
            type:Schema.Types.String,
            required:true,
        },
        "localisation":{
            type:Schema.Types.String,
            required:true,
        },
        "address":{
            type:Schema.Types.String,
            required:true,
        },
        "email":{
            type:Schema.Types.String,
            required:true,
        },
        "phone":{
            type:Schema.Types.String,
            required:true,
        },
    
});

const Hotel = model('hotel', HotelSchema);

module.exports=Hotel