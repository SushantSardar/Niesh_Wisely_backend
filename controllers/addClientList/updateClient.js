const ClientModel = require("../../models/addClientListModel");

const updateClient = async (req, res) => {

    try {
        const Id = req.params.id;
        const { userName, email, clientPhoneNumber, password } = req.body;
        
        const updates = {
            userName,email,clientPhoneNumber,password
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
        const updatedClient = await ClientModel.findByIdAndUpdate(
            Id,
            { $set: payload },
            { new: true } // Return the updated document
        );

        if (!updatedClient) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User updated successfully', updatedClient });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = updateClient;
