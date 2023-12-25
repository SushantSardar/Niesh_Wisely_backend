const AnnualComplaintTableModel = require("../../models/annualComplaintModel");

const CreateAnnualComplaintRow = async (req, res) => {
	try {
		const { ReceivedFrom, CarriedFromPrevMonth, Received, Resolved ,Pending ,createdBy,updatedBy} = req.body;
		const newForm = await AnnualComplaintTableModel.create({ ReceivedFrom, CarriedFromPrevMonth ,Received ,Resolved, Pending, createdBy,updatedBy});
		await newForm.save();
		res.status(200).json({ message: "Annual Complaint Row added successfully", newForm });
	} catch (error) {
		console.error("Annual Complaint Row not added!!!", error);
		res.status(500).json({ error: "Annual Complaint Row not added" });
	}
};

module.exports = CreateAnnualComplaintRow;