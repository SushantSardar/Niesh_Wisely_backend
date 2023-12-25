const ProfileModel = require("../../models/addProfileModel");

const updateProfile = async (req, res) => {
  try {
    const ProfileId = req.params.id; 

    const {
        profileName,
        status
    } = req.body;

    const updatedProfile = await ProfileModel.findByIdAndUpdate(
      ProfileId,
      {
        profileName,
        status,
      },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: "profile not found" });
    }

    res.status(200).json({ message: "profile updated successfully", updatedProfile });
  } catch (error) {
    console.error("profile not updated!!!", error);
    res.status(500).json({ error: "profile not updated" });
  }
};

module.exports = updateProfile;
