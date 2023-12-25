
const ComplaintTableModel = require("../../models/complaintTableModel");


const ShowComplaintRowByID = async (req, res) => {
	try {
        const id = req.params.id;

		const ComplaintRow = await ComplaintTableModel.findById(id);
        // console.log("res",ComplaintRow)
		res.status(200).json(ComplaintRow);
        
	} catch (error) {
		console.error("Complaint not added!!!", error);
		res.status(500).json({ error: "Complaint Not added" });

	}
};


module.exports = ShowComplaintRowByID;


