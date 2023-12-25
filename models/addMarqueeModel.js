const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MarqueeSchema = new Schema({
	marqueeDescription: { type: String, required: true },
    createdBy: { type : String, required: true},
	// updatedBy: { type : String, default:"None"}
},
	{
		timestamps: true,
	}
)

const MarqueeModle= mongoose.model('Marquee', MarqueeSchema);
module.exports = MarqueeModle;
