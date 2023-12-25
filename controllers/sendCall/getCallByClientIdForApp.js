const ClientModel = require("../../models/addClientListModel");
const CallModel = require("../../models/callModel");
// _________________________________________For Notifications____________________________________
const getcallsByClientId = async (req, res) => {

    const id = req.params.id;
    try {
        const clientDetails = await ClientModel.findById(id);

        const userProducts = clientDetails.products;
        const callsByProduct = [];

        for (const product of userProducts) {
            const fromDate = new Date(product.fromDate);
            const toDate = new Date(product.toDate);

            const calls = await CallModel.find({
                productName: product.productName,
                $or: [
                    { createdAt: { $gte: fromDate, $lte: toDate } },
                    { updatedAt: { $gte: fromDate, $lte: toDate } },
                ]
            }).sort({ createdAt: -1 });

            callsByProduct.push(calls);
        }

        const flatCalls = callsByProduct.flat();

        res.status(200).json(flatCalls);

    } catch (error) {

    }

};

module.exports = getcallsByClientId;
