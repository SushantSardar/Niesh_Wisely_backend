const ClientModel = require("../../models/addClientListModel");
const mongoose = require("mongoose");

const updateClientFromDashboard = async (req, res) => {
  try {
    const clientId = req.params.id;
    console.log(clientId);

    if (!mongoose.Types.ObjectId.isValid(clientId)) {
      return res.status(400).json({ error: "Invalid client ID" });
    }

    const { userName, password, name, email, clientPhoneNumber, createdBy, updatedBy, products } =
      req.body;

    // console.log('products', products);

    const updatedClient = await ClientModel.findByIdAndUpdate(
      clientId,
      {
        userName,
        password,
        name,
        clientPhoneNumber,
        email,
        createdBy,
        updatedBy,
        products,
      },
      { new: true }
    );

    console.log(updatedClient);

    if (!updatedClient) {
      return res.status(404).json({ error: "Client not found" });
    }

    res
      .status(200)
      .json({ message: "Client updated successfully", updatedClient });
  } catch (error) {
    console.error("Client not updated!!!", error);
    res.status(500).json({ error: "Client not updated" });
  }
};

module.exports = updateClientFromDashboard;
