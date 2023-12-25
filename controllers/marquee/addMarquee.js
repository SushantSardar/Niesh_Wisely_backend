const MarqueeModle = require("../../models/addMarqueeModel");

const createMarquee = async (req, res) => {
	try {
		const { marqueeDescription,createdBy} = req.body;
		const newForm = await MarqueeModle.create({ marqueeDescription,createdBy});
		await newForm.save();
		res.status(200).json({ message: "marquee sent successfully", newForm });
	} catch (error) {
		console.error("marquee not sent!!!", error);
		res.status(500).json({ error: "marquee not sent" });

	}
};

module.exports = createMarquee;