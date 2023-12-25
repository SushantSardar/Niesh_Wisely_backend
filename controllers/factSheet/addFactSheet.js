const FactSheetModel = require("../../models/factSheet/factSheetModel");

const FactSheet = async (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ error: "Invalid data format" });
    }

    const createdFactsheets = [];

    for (const item of data) {
      const { productName, category, uploadFile } = item;

      const newFactsheet = await FactSheetModel.create({
        productName,
        category,
        uploadFile,
      });

      createdFactsheets.push(newFactsheet);
    }

    const response = {
      message: "Data added successfully",
      data: createdFactsheets,
    };

    res.status(201).json(response); // Use status 201 for resource creation
  } catch (error) {
    console.error("Data not added!!!", error);
    res.status(500).json({ error: "Data not added" });
  }
};

module.exports = FactSheet;
