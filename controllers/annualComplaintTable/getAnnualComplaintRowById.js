
const AnnualComplaintTableModel = require("../../models/annualComplaintModel");

const ShowAnnualComplaintRowByID = async (req, res) => {
	try {
        const id = req.params.id;

		const ComplaintRow = await AnnualComplaintTableModel.findById(id);
		res.status(200).json(ComplaintRow);
        
	} catch (error) { 
		console.error("Annual complaint not added!!!", error);
		res.status(500).json({ error: "Annual complaint Not added" });

	}
};


module.exports = ShowAnnualComplaintRowByID;


