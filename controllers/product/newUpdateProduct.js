const NewProductModel = require("../../models/products/newProductModel");

const newUpdateProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Assuming the id is passed as a route parameter
        // console.log(productId)

        const {
            productName,
            productType,
            description,
            shortDescription,
            uploadFile,
            caps,
        } = req.body;


        // console.log('caps', caps);
        const updatedProduct = await NewProductModel.findByIdAndUpdate(
            productId,
            {
                productName,
                productType,
                description,
                shortDescription,
                uploadFile,
                caps,
            },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: "Client not found" });
        }

        res.status(200).json({ message: "Client updated successfully", updatedProduct });
    } catch (error) {
        console.error("Client not updated!!!", error);
        res.status(500).json({ error: "Client not updated" });
    }
};

module.exports = newUpdateProduct;
