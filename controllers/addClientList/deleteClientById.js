// controllers/yourControllerFile.js
const { ObjectId } = require("mongodb");

const ClientModel = require("../../models/addClientListModel");

const delClientProduct = async (req, res) => {
    try {
        const clientId = req.params.id;
        const productIdToRemove = req.body.productId;
        const client_id = new ObjectId(clientId)
        const prod_id = new ObjectId(productIdToRemove)
        const value = await ClientModel.updateOne({_id: client_id}, {$pull: {products: {_id: prod_id}}});

        // console.log(value)
        res.status(200).json({
            message: "Product deleted successfully",
            updatedClient,
        });
    } catch (error) {
        console.error("Product not deleted!!!", error);
        res.status(500).json({ error: "Product not deleted" });
    }
};

module.exports = delClientProduct;
