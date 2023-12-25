const AnnualComplaintTableModel = require("../../models/annualComplaintModel");

const EditAnnualComplaintRow = async (req, res) => {

    try {
        const Id = req.params.id;
        const { ReceivedFrom, CarriedFromPrevMonth, Received,Resolved,Pending,createdBy, updatedBy } = req.body;
        
        const updates = {
            ReceivedFrom,CarriedFromPrevMonth,Received,createdBy,Resolved,Pending, createdBy,updatedBy
        }
        // console.log("id", Id)

        const payload = {

        }

        Object.keys(updates).forEach(key=>{
            if(updates[key]!=null && updates[key]!==""){
                payload[key]=updates[key]
            }
        })
        // console.log(payload) 

        // Update the user in the database
        const updatedComplaintRow = await AnnualComplaintTableModel.findByIdAndUpdate(
            Id,
            { $set: payload },
            { new: true } // Return the updated document
        );

        if (!updatedComplaintRow) {
            return res.status(404).json({ error: 'Annual ComplaintRow not found' });
        }

        res.json({ message: 'Annual ComplaintRow updated successfully', updatedComplaintRow });
    } catch (error) {
        console.error('Error updating Annual ComplaintRow:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = EditAnnualComplaintRow;
