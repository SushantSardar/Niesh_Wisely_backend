const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({

	name: { type: String, trim: true },
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true,
	},
	password: {
		type: String,
		trim: true,
		required: true,
	},
	mobileNumber: { type: Number  },
	userName: { type: String  },
	profile: { type: String  },
	active:{type:Boolean , default:true},

	created_by: { type: String },
	updated_by: { type: String},
},
	{
		timestamps: true,
	}
)

const UserModel = mongoose.model('addUsers', userSchema);
module.exports = UserModel;
