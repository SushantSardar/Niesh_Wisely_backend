const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientComplaintTable = new Schema({
	ReceivedFrom: { type: String , trim: true, required: true },
	PendingAtTheEndOfMonth: { type: String , default:"Nil"},
	Received: { type: String , default:"Nil"},
    createdBy: { type : String, required: true},
    updatedBy: { type : String, default:"None"},
},
	{
		timestamps: true,
	}
)

const ClientComplaintTableModel = mongoose.model('ClientComplaintTable', ClientComplaintTable);
module.exports = ClientComplaintTableModel;