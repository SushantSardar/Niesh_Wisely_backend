const NewProductModel = require("../../models/products/newProductModel");

const showProductbyId = async (req, res) => {
	try {
        const id = req.params.id;

		const newClientList = await NewProductModel.findById(id);
        // console.log("res",newClientList)
		res.status(200).json(newClientList);
        
	} catch (error) {
		console.error("ClientList not added!!!", error);
		res.status(500).json({ error: "ClientList Not added" });

	}
};


module.exports = showProductbyId;


