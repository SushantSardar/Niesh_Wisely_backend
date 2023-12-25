const ClientComplaintTableModel = require("../../models/clientComplaintModel");

const EditClientComplaintRow = async (req, res) => {

    try {
        const Id = req.params.id;
        const { ReceivedFrom, PendingAtTheEndOfMonth, Received,createdBy, updatedBy } = req.body;
        
        const updates = {
            ReceivedFrom,PendingAtTheEndOfMonth,Received, createdBy,updatedBy
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
        const updatedComplaintRow = await ClientComplaintTableModel.findByIdAndUpdate(
            Id,
            { $set: payload },
            { new: true } // Return the updated document
        );

        if (!updatedComplaintRow) {
            return res.status(404).json({ error: 'Client ComplaintRow not found' });
        }

        res.json({ message: 'Client ComplaintRow updated successfully', updatedComplaintRow });
    } catch (error) {
        console.error('Error updating ComplaintRow:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = EditClientComplaintRow;
