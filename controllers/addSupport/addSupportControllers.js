const SupportModel = require("../../models/addSupportModel"); 

const addSupport = async (req, res) => {
  try {
    const {
      product,
      lotSize,
      buySell,
      script,
      aboveBelowAt,
      price,
      target,
      stopLoss,
      sample,
      description,
      uploadFile,
    } = req.body;

    const newSupport = await SupportModel.create({
      product,
      lotSize,
      buySell,
      script,
      aboveBelowAt,
      price,
      target,
      stopLoss,
      sample,
      description,
      uploadFile,
    });

    res.status(200).json({ message: "Support added successfully", support: newSupport });
  } catch (error) {
    console.error("Support not added!!!", error);
    res.status(500).json({ error: "Support not added" });
  }
};

module.exports = addSupport;
