const NewProductModel = require("../../models/products/newProductModel");



const newAddProduct = async (req, res) => {
    try {
        const { productName, productType, description, shortDescription, uploadFile, createdAt, updatedAt, caps } = req.body;

        const newProduct = await NewProductModel.create({
            productName,
            productType,
            description,
            shortDescription,
            uploadFile,
            createdAt,
            updatedAt,
            caps,
        });

        await newProduct.save();
        res.status(200).json({ message: "Product added successfully", newProduct });
    } catch (error) {
        console.error("Product not added!!!", error);
        res.status(500).json({ error: "Product Not added" });
    }
};


module.exports = newAddProduct;