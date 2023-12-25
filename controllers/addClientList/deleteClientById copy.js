// controllers/yourControllerFile.js
const { MongoClient, ObjectId } = require("mongodb");

const ClientModel = require("../../models/addClientListModel");

const delClientProduct = async (req, res) => {
    try {
        const clientId = req.params.id;
        const productIdToRemove = req.body.productId;

        // const updatedClient = await ClientModel.findByIdAndUpdate(
        //     clientId,
        //     { $pull: { products: { _id: productIdToRemove } } },
        //     { new: true }
        // );


        const req_id = new ObjectId(clientId)
        const prod_id = new ObjectId(productIdToRemove)
        const value = await ClientModel.updateOne({_id: req_id}, {$pull: {products: {_id: prod_id}}});

        // console.log(value)

        // last solution
        // const value = await ClientModel.findOne({_id: clientId})
        // const product = value.products
        // const newValue = Object.values(product).filter(it => JSON.stringify(it['_id'] )!= JSON.stringify(productIdToRemove))
        // const res = await ClientModel.updateOne({_id: clientId}, {$set: {products: newValue}});
        // console.log(res)

        // if (!updatedClient) {
        //     return res.status(400).json({ msg: 'Failed to delete product' });
        // }

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
