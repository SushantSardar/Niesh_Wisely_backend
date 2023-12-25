const ComplaintTableModel = require("../../models/complaintTableModel");

const EditComplaintRow = async (req, res) => {

    try {
        const Id = req.params.id;
        const { ReceivedFrom, CarriedFromPrevMonth, Received,Resolved,Pending,createdBy, updatedBy } = req.body;
        
        const updates = {
            ReceivedFrom,CarriedFromPrevMonth,Received,createdBy,Resolved,Pending, createdBy,updatedBy
        }

        const payload = {

        }

        Object.keys(updates).forEach(key=>{
            if(updates[key]!=null && updates[key]!==""){
                payload[key]=updates[key]
            }
        })

        // Update the user in the database
        const updatedComplaintRow = await ComplaintTableModel.findByIdAndUpdate(
            Id,
            { $set: payload },
            { new: true } // Return the updated document
        );

        if (!updatedComplaintRow) {
            return res.status(404).json({ error: 'ComplaintRow not found' });
        }

        res.json({ message: 'ComplaintRow updated successfully', updatedComplaintRow });
    } catch (error) {
        console.error('Error updating ComplaintRow:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = EditComplaintRow;
