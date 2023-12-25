const AnnualComplaintTableModel = require("../../models/annualComplaintModel");

const showAnnualComplaintRow = async (req, res) => {
	try {
		const newAnnualComplaintRow = await AnnualComplaintTableModel.find({}).sort({createdAt:-1});
		let totalCarriedforward = 0;
		let totalReceived = 0;
		let totalResolved = 0;
		let totalPending = 0;
		let totalYears = 0;
        

	
        newAnnualComplaintRow.map((data) => {
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
				totalYears++;
			}
        });
 
		res.status(200).json({newAnnualComplaintRow,totalCarriedforward,totalReceived,totalResolved,totalPending,totalYears});
	} catch (error) {
		console.error("Annual Complaint not added!!!", error);
		res.status(500).json({ error: "Annual Complaint Not added" });
	}
};


module.exports = showAnnualComplaintRow;


