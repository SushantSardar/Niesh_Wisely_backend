const ComplaintTableModel = require("../../models/complaintTableModel");

const createComplaintRow = async (req, res) => {
	try {
		const { ReceivedFrom, CarriedFromPrevMonth, Received, Resolved ,Pending ,createdBy,updatedBy} = req.body;
		const newForm = await ComplaintTableModel.create({ ReceivedFrom, CarriedFromPrevMonth ,Received ,Resolved, Pending, createdBy,updatedBy});
		await newForm.save();
		res.status(200).json({ message: "Complaint Row added successfully", newForm });
	} catch (error) {
		console.error("Complaint Row not added!!!", error);
		res.status(500).json({ error: "Complaint Row not added" });
	}
};

module.exports = createComplaintRow;