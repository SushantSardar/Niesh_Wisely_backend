const NewProductModel = require("../../models/products/newProductModel");
const CallModel = require("../../models/callModel");

const NewShowproductlist = async (req, res) => {
    try {
        // Fetch the product list
        const newProduct = await NewProductModel.find({}).sort({ createdAt: -1 });

        // Calculate accuracy for each product
        const productWithAccuracy = await Promise.all(newProduct.map(async (product) => {
            const accuracy = await calculateAccuracy(product.productName);
            return { ...product.toObject(), accuracy };
        }));

        // Send the product list with individual accuracies in the response
        res.status(200).json(productWithAccuracy);
    } catch (error) {
        console.error("Product not added!!!", error);
        res.status(500).json({ error: "Product Not added" });
    }
};

const calculateAccuracy = async (productName) => {
    try {
        // console.log("prod",productName)
        const regex = new RegExp(productName, 'i');

        // Construct the query to match records where the script contains the product name
        const query = productName ? { productName: { $regex: regex } } : {};
        // console.log("query",query)
        // Fetch data from the database based on productName
        const data = await CallModel.find( query , 'updatedAt productName script dealType quantity price1 target stopLoss statusValue pnl');
        // console.log("data",data)

        const filteredData = data.filter(({ statusValue }) => statusValue !== 'Executed' && statusValue !== 'Avoid');
        // console.log("filteredData",filteredData)
        let totalCalls = 0;
        let targetHitCount = 0;
        let customizeCount = 0;
        let stopLossCount = 0;

        // Add filtered data with occurrence calculation 
        filteredData.forEach(({ statusValue, pnl }) => {
            totalCalls++;

            // Calculate occurrences
            if (statusValue === 'Target HIT' && pnl > 0) {
                targetHitCount++;
            } else if (statusValue === 'Customize' && pnl > 0) {
                customizeCount++;
            } else if (statusValue === 'Stop Loss' && pnl > 0) {
                stopLossCount++;
            }
        });

        // Debugging log
        // console.log(`Debug: ${productName} - totalCalls: ${totalCalls}, targetHitCount: ${targetHitCount}, customizeCount: ${customizeCount}, stopLossCount: ${stopLossCount}`);

        // Ensure that totalCalls is greater than zero before performing the division
        const accuracy = totalCalls > 0 ? ((targetHitCount + customizeCount + stopLossCount) / totalCalls) * 100 : 0;

        return accuracy.toFixed(0);
    } catch (error) {
        console.error(`Error calculating accuracy for product ${productName}:`, error);
        return null;
    }
};


module.exports = NewShowproductlist;
