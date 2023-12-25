const MarqueeModel = require("../../models/addMarqueeModel");

const showLatestMarquee = async (req, res) => {
  try {
    const latestMarquee = await MarqueeModel.findOne().sort({ createdAt: -1 });

    if (latestMarquee) {
      res.status(200).json(latestMarquee);
    } else {
      res.status(404).json({ error: "No marquee found" });
    }
  } catch (error) {
    console.error("Error fetching latest marquee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = showLatestMarquee;


