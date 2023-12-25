const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CallSchema = new Schema(
	{
		productName: { type: String, trim: true },
		quantity: { type: String },
		dealType: { type: String },
		script: { type: String },
		position: { type: String },
		price1: { type: Number },
		price2: { type: Number },
		price3: { type: Number },
		target: { type: Number },
		stopLoss: { type: Number },
		// sample: { type: String },
		description: { type: String },
		uploadFile:{type:String},
		pnl:{type:Number,default:0},
		statusValue: { type: String },
		customizeValue:{type:Number, default:0},
		created_by: { type: String ,default:""},
		updated_by: { type: String ,default:""},
		// image: { type: Buffer }, // Store the image as a Buffer
		// imageType: { type: String }, // Store the MIME type of the image
	},
	{
		timestamps: true,
	}
);

const CallModel = mongoose.model('Call', CallSchema);
module.exports = CallModel;