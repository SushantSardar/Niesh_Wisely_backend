const ProfileModel = require("../../models/addProfileModel");

const showOneProfile = async (req, res) => {
	try {
        const id = req.params.id;

		const newProfile = await ProfileModel.findById(id);
        // console.log("res",newProfile)
		res.status(200).json(newProfile);
        
	} catch (error) {
		console.error("profile not added!!!", error);
		res.status(500).json({ error: "profile Not added" });

	}
};


module.exports = showOneProfile;


