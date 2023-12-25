const ClientComplaintTableModel = require("../../models/clientComplaintModel");

const showClientComplaintRow = async (req, res) => {
	try {
		const newClientComplaintRow = await ClientComplaintTableModel.find({}).sort({createdAt:-1});

		// console.log(newComplaintRow)
		let totalPendingAtTheEndOfMonth = 0;
		let totalReceived = 0;

	
        newClientComplaintRow.map((data) => {
            if (data.PendingAtTheEndOfMonth !== "Nil" && !isNaN(data.PendingAtTheEndOfMonth)) {
                totalPendingAtTheEndOfMonth += parseFloat(data.PendingAtTheEndOfMonth);
            }
            if (data.Received !== "Nil" && !isNaN(data.Received)) {
                totalReceived += parseFloat(data.Received);
            }
        });


        // console.log(totalCarriedforward);
        // console.log(totalReceived);
        // console.log(totalCarriedforward);
        // console.log(totalCarriedforward);
        // console.log(totalMonths);

		


		res.status(200).json({newClientComplaintRow,totalPendingAtTheEndOfMonth,totalReceived});
	} catch (error) {
		console.error("Client Complaint not added!!!", error);
		res.status(500).json({ error: "Client Complaint Not added" });
	}
};


module.exports = showClientComplaintRow;


