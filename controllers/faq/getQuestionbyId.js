const questionModel = require("../../models/questionModel");


const getQuestionbyId = async (req, res) => {
	try {
        const id = req.params.id;

		const newClientList = await questionModel.findById(id);
        // console.log("res",newClientList)
		res.status(200).json(newClientList);
        
	} catch (error) {
		console.error("question not added!!!", error);
		res.status(500).json({ error: "question Not added" });

	}
};


module.exports = getQuestionbyId;


