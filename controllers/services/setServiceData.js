const ServiceModel = require("../../models/services/servicesModel");

const addService = async (req, res) => {
    try {
        const {
            serviceName,
            description,
            accuracy,
            caps,
            
        } = req.body;

        const newService = await ServiceModel.create({
            serviceName,
            description,
            accuracy,
            caps,
        });

        res.status(200).json({ message: "Service added successfully", newService });
    } catch (error) {
        console.error("Service not added!!!", error);
        res.status(500).json({ error: "Service not added" });
    }
};

module.exports = addService;