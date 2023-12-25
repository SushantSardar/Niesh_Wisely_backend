const QuestionModel = require("../../models/questionModel");

const askQuestion = async (req, res) => {
	try {
		const { question, description, pageFor} = req.body;
		const newForm = await QuestionModel.create({ question, description, pageFor });
		await newForm.save();
		res.status(200).json({ message: "question sent successfully", newForm });
	} catch (error) {
		console.error("question not sent!!!", error);
		res.status(500).json({ error: "question not sent" });

	}
};

module.exports = askQuestion;