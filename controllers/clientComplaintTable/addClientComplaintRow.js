const ClientComplaintTableModel = require("../../models/clientComplaintModel");


const createClientComplaintRow = async (req, res) => {
	try {
		const { ReceivedFrom, PendingAtTheEndOfMonth, Received,createdBy,updatedBy} = req.body;
		const newForm = await ClientComplaintTableModel.create({ ReceivedFrom, PendingAtTheEndOfMonth ,Received , createdBy,updatedBy});
		await newForm.save();
		res.status(200).json({ message: "Client Complaint Row added successfully", newForm });
	} catch (error) {
		console.error("Client Complaint Row not added!!!", error);
		res.status(500).json({ error: "Client Complaint Row not added" });
	}
};

module.exports = createClientComplaintRow;