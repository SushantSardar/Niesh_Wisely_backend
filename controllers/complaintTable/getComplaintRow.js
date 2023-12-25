const ComplaintTableModel = require("../../models/complaintTableModel");

const showComplaintRow = async (req, res) => {
	try {
		const newComplaintRow = await ComplaintTableModel.find({}).sort({createdAt:-1});

		// console.log(newComplaintRow)
		let totalCarriedforward = 0;
		let totalReceived = 0;
		let totalResolved = 0;
		let totalPending = 0;
		let totalMonths = 0;

	
        newComplaintRow.map((data) => {
            if (data.CarriedFromPrevMonth !== "Nil" && !isNaN(data.CarriedFromPrevMonth)) {
                totalCarriedforward += parseFloat(data.CarriedFromPrevMonth);
            }
            if (data.Received !== "Nil" && !isNaN(data.Received)) {
                totalReceived += parseFloat(data.Received);
            }
            if (data.Resolved !== "Nil" && !isNaN(data.Resolved)) {
                totalResolved += parseFloat(data.Resolved);
            }
            if (data.Pending !== "Nil" && !isNaN(data.Pending)) {
                totalPending += parseFloat(data.Pending);
            }
			if(data.ReceivedFrom !==""){
				totalMonths++;
			}
        });


        // console.log(totalCarriedforward);
        // console.log(totalReceived);
        // console.log(totalCarriedforward);
        // console.log(totalCarriedforward);
        // console.log(totalMonths);

		


		res.status(200).json({newComplaintRow,totalCarriedforward,totalReceived,totalResolved,totalPending,totalMonths});
	} catch (error) {
		console.error("Complaint not added!!!", error);
		res.status(500).json({ error: "Complaint Not added" });
	}
};


module.exports = showComplaintRow;


