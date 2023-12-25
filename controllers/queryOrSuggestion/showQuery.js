const QueryModel = require("../../models/queryOrSuggestionModel");

const showQuery = async (req, res) => {
	try {
		const newQuery = await QueryModel.find({}).sort({createdAt:-1});
		res.status(200).json(newQuery);
	} catch (error) {
		console.error("Query not added!!!", error);
		res.status(500).json({ error: "Query Not added" });

	}
};


module.exports = showQuery;


