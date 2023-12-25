const cron = require("node-cron");
const ClientModel = require("../../models/addClientListModel");

const expireClient = async (req, res) => {
    try {
        const todayDate = new Date().toISOString('en-IN', { timeZone: 'Asia/Kolkata' });

        // const currentDate = new Date();

        // // Format the date and time in the user's local time zone
        // const istDateTime = new Intl.DateTimeFormat('en-US', {
        //     timeZone: 'Asia/Kolkata', // 'Asia/Kolkata' is the IANA time zone identifier for IST
        //     year: 'numeric',
        //     month: 'numeric',
        //     day: 'numeric',
        //     hour: 'numeric',
        //     minute: 'numeric',
        //     second: 'numeric'
        // }).format(currentDate);


        const result = await ClientModel.updateMany(
            {
                // 'products.serviceEndDate': { $gte: todayDate },
                'products.serviceEndDate': { $lt: todayDate },
                'products.serviceStatus': 'Active'
            },
            {
                $set: {
                    'products.$[elem].serviceStatus': 'Expired'
                }
            },
            {
                arrayFilters: [
                    { 'elem.serviceEndDate': { $lt: todayDate } }
                ]
            }
        );

        console.log('Matched documents:', result.matchedCount);
        console.log('Modified documents:', result.modifiedCount);

        res.status(200).json(result);
    } catch (error) {
        console.error("ClientList not Updated!!!", error);
        res.status(500).json({ error: "ClientList Not Updated" });

    }
};

cron.schedule("0 3 * * *", async () => {
    console.log("Running expireClient job...");
    await expireClient();
});

module.exports = expireClient;

