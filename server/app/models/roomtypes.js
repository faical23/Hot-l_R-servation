const { Schema, model } = require('mongoose');
const RoomTypeSchema = new Schema({
    name:{
        type:Schema.Types.String,
        required:true
    },
    price:{
        type:Schema.Types.Decimal128,
        required:true
    }
},{
    timestamps:true
});
const roomtype = model('room_type', RoomTypeSchema);

module.exports = roomtype