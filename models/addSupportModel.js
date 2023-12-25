const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Support = new Schema({
	product: { type: String, required: true },
	lotSize: { type: String, required: true},
	buySell: { type: String, required: true },
	script: { type: String , required: true},
	aboveBelowAt: { type: String , required: true},
	price: { type: Number, required: true},
	target: { type: Number , required: true},
	stopLoss: { type: Number , required: true},
	sample: { type: String },
	description: { type: String , required: true},
	uploadFile: { type: String, required: true },
	createdBy:{type:String},
},
	{
		timestamps: true,
	}
)

const SupportModel = mongoose.model('Support', Support);
module.exports = SupportModel;
