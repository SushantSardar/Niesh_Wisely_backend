const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const ClientModel = require("../../models/addClientListModel");
require("dotenv").config();
const sendMail = require("../../utils/sendEmail");
// const privateKey = process.env.JWTPRIVETKEY;

const clientForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await ClientModel.findOne({ email });

    if (!user) {
      return res.status(401).send({
        type: "error",
        message: "Invalid email or user not exist",
      });
    }
    // ______________________________sending Mail__________________________
    const randomToken = Math.floor(1000 + Math.random() * 9000);
    const subject = "verification Code for Password Reset";

    await sendMail(email,subject,randomToken);

    return res.status(200).send({
      type: "success",
      message: "client exists",
      code: `${randomToken}`,
      userId: user._id
    });
    // ____________________________________________________________________

  } catch (error) {
    return res.status(500).send({
      type: "error",
      message: "Something went wrong during forget password",
      error: error,
    });
  }
};

module.exports = clientForgetPassword;
