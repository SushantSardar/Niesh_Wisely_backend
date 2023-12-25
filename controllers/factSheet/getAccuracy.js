const CallModel = require("../../models/callModel");

const ShowFactSheetAccuracyInApp = async (req, res) => {
    try {
        const { productName } = req.query;
        const regex = new RegExp(productName, 'i');

        // Construct the query to match records where the script contains the product name
        const query = productName ? { productName: { $regex: regex } } : {};

        // Fetch data from the database
        const data = await CallModel.find(query, 'updatedAt productName script dealType quantity price1 target stopLoss statusValue pnl');

        const filteredData = data.filter(({ statusValue }) => statusValue !== 'Executed' && statusValue !== 'Avoid');

        let totalCalls = 0;
        let targetHitCount = 0;
        let customizeCount = 0;
        let stopLossCount = 0;
        let totalPnl = 0;
    
        // Add filtered data with occurrence calculation 
        filteredData.forEach(({ statusValue, pnl }) => {
           
            totalCalls++;
            totalPnl += pnl;
    
            // Calculate occurrences
            if (statusValue === 'Target HIT' && pnl > 0) {
                targetHitCount++;
            } else if (statusValue === 'Customize' && pnl > 0) {
                customizeCount++;
            } else if (statusValue === 'Stop Loss' && pnl > 0) {
                stopLossCount++;
            }
        });
    
        const accuracy = ((targetHitCount + customizeCount + stopLossCount) / totalCalls) * 100;
        // console.log(accuracy)
        // res.json(accuracy.toFixed(0))
        res.status(200).json(accuracy);
        
    } catch (error) {
        console.error('Error fetching data from the database:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = ShowFactSheetAccuracyInApp;
