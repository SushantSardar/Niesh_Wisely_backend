const ProfileModel = require("../../models/addProfileModel");

const addProfile = async (req, res) => {
  try {
    const { profileName, status } = req.body;

    const newProfile = await ProfileModel.create({
      profileName,
      status,
    });

    res.status(200).json({ message: "Profile added successfully", newProfile });
  } catch (error) {
    console.error("Profile not added!!!", error);
    res.status(500).json({ error: "Profile not added" });
  }
};

module.exports = addProfile;
