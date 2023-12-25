const ComplaintModel = require("../../models/addComplaintModel");


const showComplaints = async (req, res) => {
	try {
		const newComplaints = await ComplaintModel.find({}).sort({ createdAt: -1 });
		res.status(200).json(newComplaints);
	} catch (error) {
		console.error("Complaints not added!!!", error);
		res.status(500).json({ error: "Complaints Not added" });

	}
};


module.exports = showComplaints;


