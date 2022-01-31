const { Schema, model } = require('mongoose');
const UserSchema = new Schema({
	user_id: {
		type: Schema.Types.ObjectId,
		ref: "user"
	},
	email: {
		type: String,
		max: 30,
		required: true
	},

	name: {
		type: String,
		max: 50
	},
	password: {
		type: String,
		max: 50
	},
	
	sexe: {
		type: String,
		enum: ['M', 'F'],
		default: 'M'
	},	
});

const User = model('user', UserSchema);

module.exports = User;
