const CallModel = require("../../models/callModel"); 

const getCalls = async (req, res) => {
  try {
    const calls = await CallModel.find({}).sort({createdAt:-1});
    res.status(200).json(calls);
  } catch (error) {
    console.error("Calls not retrieved!!!", error);
    res.status(500).json({ error: "Calls not retrieved" });
  }
};

module.exports = getCalls;
