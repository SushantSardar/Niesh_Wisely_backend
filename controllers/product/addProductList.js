// const ProductModel = require("../../models/products/productModel")


// const addproductlist = async (req, res) => {
// 	try {
// 		const { productName, productType, category, price, duration, isActive, description, shortDescription,uploadFile } = req.body;
		
// 		const newProduct = await ProductModel.create({
// 			productName,
// 			productType,
// 			category,
// 			price,
// 			duration,
// 			isActive,
// 			description,
// 			shortDescription,
// 			uploadFile
// 		});

// 		await newProduct.save();
// 		res.status(200).json({ message: "Product added successfully", newProduct });
// 	} catch (error) {
// 		console.error("Product not added!!!", error);
// 		res.status(500).json({ error: "Product Not added" });

// 	}
// };


// module.exports = addproductlist;


