const addUserModel = require("../../models/addUser/addUserModel");

const getOneUser = async (req, res) => {
	try {
        const id = req.params.id;

		const newUser = await addUserModel.findById(id);
        // console.log("res",newUser)
		res.status(200).json(newUser);
        
	} catch (error) {
		console.error("question not added!!!", error);
		res.status(500).json({ error: "question Not added" });

	}
};


module.exports = getOneUser;


