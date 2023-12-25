const QueryModel = require("../../models/queryOrSuggestionModel");


const createQuery = async (req, res) => {
	try {
		const { customerName,queryDescription} = req.body;
		const newForm = await QueryModel.create({ customerName, queryDescription});
		await newForm.save(); 
		res.status(200).json({ message: "query or suggestion sent successfully", newForm });
	} catch (error) {
		console.error("query or suggestion not sent!!!", error);
		res.status(500).json({ error: "review or suggestion not sent" });
	}
};

module.exports = createQuery;