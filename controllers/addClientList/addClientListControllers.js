const ClientModel = require("../../models/addClientListModel");

const addClientList = async (req, res) => {
  try {
    const {
      userName,
      password,
      name,
      email,
      clientPhoneNumber,
      createdBy,
      updatedBy,
      products,
    } = req.body;

    const newClient = await ClientModel.create({
      userName,
      password,
      name,
      clientPhoneNumber,
      createdBy,
      updatedBy,
      email: email,
      products: products,
    });

    res.status(200).json({ message: "Client added successfully", newClient });
  } catch (error) {
    console.error("Client not added!!!", error);
    res.status(500).json({ error: "Client not added" });
  }
};


module.exports = addClientList;
