const ClientComplaintModel = require("../../models/addComplaintModel"); 

const addComplaint = async (req, res) => {
	try {
		const {
			clientName,
			status,
			complaintDescription,
			solution,
			solvedBy,
		} = req.body;

		const newComplaint = await ClientComplaintModel.create({
			clientName,
			status,
			complaintDescription,
			solution,
			solvedBy,
		});

		res.status(200).json({ message: "Complaint added successfully", newComplaint });
	} catch (error) {
		console.error("Complaint not added!!!", error);
		res.status(500).json({ error: "Complaint not added" });
	}
};

module.exports = addComplaint;
