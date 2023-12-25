const ClientModel = require("../../models/addClientListModel");

const deleteAllClients = async (req, res) => {
  try {
    // Use the `deleteMany` method to remove all client records from the database
    const result = await ClientModel.deleteMany({});

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "No client records found to delete" });
    }

    res.status(200).json({ message: "All client records deleted successfully" });
  } catch (error) {
    console.error("Client records not deleted!!!", error);
    res.status(500).json({ error: "Client records not deleted" });
  }
};

module.exports = deleteAllClients;
