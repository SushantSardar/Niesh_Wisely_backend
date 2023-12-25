const NewProductModel = require("../../models/products/newProductModel");


const delProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        const deletedProduct = await NewProductModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(401).json({ err: "Product not found" });
        }

        res.status(200).json({ msg: 'Product deleted successfully', deletedProduct });
    } catch (err) {
        console.log("Error deleting product", err);
        res.status(400).json({ err: 'Error deleting product' });
    }
};

module.exports = delProduct;
