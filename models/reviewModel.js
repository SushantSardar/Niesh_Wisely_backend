const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReviewSchema = new Schema({
	customerName: { type: String, required: true, trim: true },
	reviewDescription: { type: String , required: true},
	approvalValue:{type:String, default: "pending"}
},
	{
		timestamps: true,
	}
)

const ReviewModle= mongoose.model('Review', ReviewSchema);
module.exports = ReviewModle;
