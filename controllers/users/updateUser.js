const addUserModel = require("../../models/addUser/addUserModel");

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id; // Assuming the id is passed as a route parameter
        // console.log(userId)

        const {
            name,
            email,
            mobileNumber,
            userName,
            password,
            profile,
            active,
        } = req.body;
;
        const updatedUser = await addUserModel.findByIdAndUpdate(
            userId,
            {
                name,
                email,
                mobileNumber,
                userName,
                password,
                profile,
                active,
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "user not found" });
        }

        res.status(200).json({ message: "user updated successfully", updatedUser });
    } catch (error) {
        console.error("user not updated!!!", error);
        res.status(500).json({ error: "user not updated" });
    }
};

module.exports = updateUser;
