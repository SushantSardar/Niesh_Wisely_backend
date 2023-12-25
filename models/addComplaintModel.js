const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientComplaintSchema = new Schema({
	clientName: { type: String,  required: true},
	status: { type: String,  required: true, default: "pending"},
	complaintDescription: { type: String, required: true },
	solution: { type: String, required: true, default: "pending" },
	solvedBy: { type: String,  required: true, default: "pending"},
	createBy:{type:String},
}, {
	timestamps: true,
});

const ClientComplaintModel = mongoose.model('Complaint', ClientComplaintSchema);
module.exports = ClientComplaintModel;
