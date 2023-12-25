const addUserModel = require("../../models/addUser/addUserModel");


const AddUserData = async (req, res) => {
	try {
		const { name, email, mobileNumber,userName,password,profile,active} = req.body;
	
		const newUser = await addUserModel.create({
			name,
			email,
			mobileNumber,
			userName,
			password,
			profile,
			active,
			// imageUrl,
		});

		await newUser.save();
		res.status(200).json({ message: "user added successfully", newUser });
	} catch (error) {
		console.error("user not added!!!", error);
		res.status(500).json({ error: "user Not added" });

	}
};


module.exports = AddUserData;