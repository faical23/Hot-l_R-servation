const { Schema, model } = require('mongoose');
const ReservationSchema = new Schema({
        "user_id":{
            type:Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },
        "room_id":{
            type:Schema.Types.ObjectId,
            ref:"room",
            required:true,
        },
        "date_entre":{
            type:Schema.Types.Date,
            required:true,
        },
        "date_sortie":{
            type:Schema.Types.Date,
            required:true,
        },
        cancel:{
            type:Schema.Types.Boolean
        }
}, {});
const Reservation = model('reservation', ReservationSchema);
module.exports=Reservation