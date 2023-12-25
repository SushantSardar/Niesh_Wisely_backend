const ServiceModel =  require("../../models/services/servicesModel");

const getServices = async (req, res) => {
  try {
    const services = await ServiceModel.find({});
    res.status(200).json(services);
  } catch (error) {
    console.error("Services not retrieved!!!", error);
    res.status(500).json({ error: "Services not retrieved" });
  }
};

module.exports = getServices;
