const ClientModel = require("../../models/addClientListModel");


const showClientList = async (req, res) => {
	try {
		const newClientList = await ClientModel.find({}).sort({ createdAt: -1 });
		res.status(200).json(newClientList);
	} catch (error) {
		console.error("ClientList not added!!!", error);
		res.status(500).json({ error: "ClientList Not added" });

	}
};


module.exports = showClientList;


