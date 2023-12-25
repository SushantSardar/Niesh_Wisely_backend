const ExpoToken = require("../../models/notificationTokens/expoToken");

const SaveExpoTokens = async (req, res) => {
  try {
    const { tokens } = req.body;

    // Check if any of the tokens already exist
    const existingTokens = await ExpoToken.find({ tokens: { $in: tokens } });

    if (existingTokens.length > 0) {
      return res.status(400).json({
        error: "Duplicate tokens found",
        duplicates: existingTokens,
      });
    }

    const expoTokenDoc = await ExpoToken.create({ tokens });

    res
      .status(201)
      .json({ message: "Expo tokens saved successfully", data: expoTokenDoc });
  } catch (error) {
    console.error("Expo tokens not saved!!!", error);
    res.status(500).json({ error: "Expo tokens not saved" });
  }
};

const getAllExpoTokens = async (req, res) => {
  try {
    const allTokens = await ExpoToken.find();
    res.status(200).json({ data: allTokens });
  } catch (error) {
    console.error("Error fetching Expo tokens!!!", error);
    res.status(500).json({ error: "Error fetching Expo tokens" });
  }
};

module.exports = {
  SaveExpoTokens,
  getAllExpoTokens,
};
