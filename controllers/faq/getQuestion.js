const questionModel = require("../../models/questionModel");


const getQuestion = async (req, res) => {
	try {
		const newQuestion = await questionModel.find({}).sort({createdAt:-1});
		res.status(200).json(newQuestion);
	} catch (error) {
		console.error("Users not added!!!", error);
		res.status(500).json({ error: "Users Not added" });

	}
};


module.exports = getQuestion;


