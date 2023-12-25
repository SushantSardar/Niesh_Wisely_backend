const MarqueeModle = require("../../models/addMarqueeModel");

const showMarqueeForDashboard = async (req, res) => {
	try {
		const newMarquees = await MarqueeModle.find({}).sort({createdAt:-1})
		res.status(200).json(newMarquees);
	} catch (error) {
		console.error("marquee not added!!!", error);
		res.status(500).json({ error: "marquee Not added" });

	}
};

module.exports = showMarqueeForDashboard;


