const ClientModel = require("../../models/addClientListModel");
const mongoose = require("mongoose");

const updateDeviceToken = async (req, res) => {
  try {
    const clientId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(clientId)) {
      return res.status(400).json({ error: "Invalid client ID" });
    }

    const { deviceToken } = req.body;

    const updatedClient = await ClientModel.findByIdAndUpdate(
      clientId,
      { deviceToken },
      { new: true }
    );

    if (!updatedClient) {
      return res.status(404).json({ error: "Client not found" });
    }

    res
      .status(200)
      .json({ message: "Device token updated successfully", updatedClient });
  } catch (error) {
    console.error("Device token not updated!!!", error);
    res.status(500).json({ error: "Device token not updated" });
  }
};

module.exports = updateDeviceToken;
