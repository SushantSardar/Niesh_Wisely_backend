const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AnnualComplaintTable = new Schema({
	ReceivedFrom: { type: String , trim: true, required: true },
	CarriedFromPrevMonth: { type: String , default:"Nil"},
	Received: { type: String , default:"Nil"},
	Resolved: { type: String , default:"Nil"},
	Pending: { type: String , default:"Nil"},
    createdBy: { type : String, required: true},
    updatedBy: { type : String, default:"None"},
},
	{
		timestamps: true,
	}
)

const AnnualComplaintTableModel = mongoose.model('AnnualComplaintTable', AnnualComplaintTable);
module.exports = AnnualComplaintTableModel;