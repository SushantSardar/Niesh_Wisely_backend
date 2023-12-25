const ClientComplaintModel = require("../../models/addComplaintModel");


const updateComplaint = async (req, res) => {
    try {
        const complaintId = req.params.id; // Assuming the id is passed as a route parameter
        // console.log(complaintId)

        const {
            clientName,
                status,
                complaintDescription,
                solution,
                solvedBy,
                createBy,
        } = req.body;
;
        const updatedComplaint = await ClientComplaintModel.findByIdAndUpdate(
            complaintId,
            {
                clientName,
                status,
                complaintDescription,
                solution,
                solvedBy,
                createBy,
            },
            { new: true }
        );

        if (!updatedComplaint) {
            return res.status(404).json({ error: "complaint not found" });
        }

        res.status(200).json({ message: "complaint updated successfully", updatedComplaint });
    } catch (error) {
        console.error("complaint not updated!!!", error);
        res.status(500).json({ error: "complaint not updated" });
    }
};

module.exports = updateComplaint;
