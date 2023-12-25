const addProfileModel = require("../../models/addProfileModel");


const getProfile = async (req, res) => {
	try {
		const newProfile = await addProfileModel.find({}).sort({createdAt:-1});
		res.status(200).json(newProfile);
	} catch (error) {
		console.error("Users not added!!!", error);
		res.status(500).json({ error: "Users Not added" });

	}
};


module.exports = getProfile;


