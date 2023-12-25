const ClientModel = require("../../models/addClientListModel");


const showClientListId = async (req, res) => {
	try {
        const id = req.params.id;

		const newClientList = await ClientModel.findById(id);
        // console.log("res client",newClientList)
		res.status(200).json(newClientList);
        
	} catch (error) {
		console.error("ClientList not added!!!", error);
		res.status(500).json({ error: "ClientList Not added" });

	}
};


module.exports = showClientListId;


