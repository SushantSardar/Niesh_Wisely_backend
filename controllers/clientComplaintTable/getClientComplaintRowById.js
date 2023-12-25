
const ClientComplaintTableModel = require("../../models/clientComplaintModel");


const ShowClientComplaintRowByID = async (req, res) => {
	try {
        const id = req.params.id;

		const ClientComplaintRow = await ClientComplaintTableModel.findById(id);
        // console.log("res",ClientComplaintRow)
		res.status(200).json(ClientComplaintRow);
        
	} catch (error) {
		console.error("Client Complaint not added!!!", error);
		res.status(500).json({ error: "Client Complaint Not added" });

	}
};


module.exports = ShowClientComplaintRowByID;


