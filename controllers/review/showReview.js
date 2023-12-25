const ReviewModel = require("../../models/reviewModel");


const showReviews = async (req, res) => {
	try {
		const newReviews = await ReviewModel.find({}).sort({createdAt:-1})
		res.status(200).json(newReviews);
	} catch (error) {
		console.error("Reviews not added!!!", error);
		res.status(500).json({ error: "Reviews Not added" });

	}
};


module.exports = showReviews;


