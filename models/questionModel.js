const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
	question: { type: String, required: true, trim: true },
	description: { type: String , required: true},
	pageFor: {type: String, required: true},
},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Question', QuestionSchema);
