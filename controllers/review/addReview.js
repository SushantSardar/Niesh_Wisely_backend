const ReviewModel = require("../../models/reviewModel");

const createReview = async (req, res) => {
	try {
		const { customerName, reviewDescription,approvalValue} = req.body;
		const newForm = await ReviewModel.create({ customerName, reviewDescription,approvalValue });
		await newForm.save();
		res.status(200).json({ message: "review sent successfully", newForm });
	} catch (error) {
		console.error("review not sent!!!", error);
		res.status(500).json({ error: "review not sent" });

	}
};

module.exports = createReview;