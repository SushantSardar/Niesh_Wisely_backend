const addUserModel = require("../../models/addUser/addUserModel");


const getUserData = async (req, res) => {
	try {
		const newUser = await addUserModel.find({}).sort({createdAt:-1});
		res.status(200).json(newUser);
	} catch (error) {
		console.error("Users not added!!!", error);
		res.status(500).json({ error: "Users Not added" });

	}
};


module.exports = getUserData;


