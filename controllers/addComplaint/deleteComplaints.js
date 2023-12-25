const ClientComplaintModel = require("../../models/addComplaintModel");

const deleteAllComplaints = async (req, res) => {
  try {
    // Use the `deleteMany` method to remove all complaints from the database
    const result = await ClientComplaintModel.deleteMany({});

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "No complaints found to delete" });
    }

    res.status(200).json({ message: "All complaints deleted successfully" });
  } catch (error) {
    console.error("Complaints not deleted!!!", error);
    res.status(500).json({ error: "Complaints not deleted" });
  }
};

module.exports = deleteAllComplaints;
