const { Schema, model } = require('mongoose');
const RoomSchema = new Schema({
    ref:{
        type:Schema.Types.Number,
        required:true
    },
    capacity:{
        type:Schema.Types.Number,
        required:true
    },
	block: {
		type: String,
		enum: ["A", "B", "C", "D", "E"],
		default: 'A'
	},	
	type_id: {
		type: Schema.Types.ObjectId,
		ref: "room_types"
	},
    isReserved:{
        type:Schema.Types.Boolean,
        default:false
    }
},{
    timestamps:true
});
const Room = model('room', RoomSchema);
module.exports = Room