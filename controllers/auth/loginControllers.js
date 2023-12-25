const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const addUsersModel = require("../../models/addUser/addUserModel")
const UserModel = require("../../models/users/usersModel");// this is redundant
const AddUserModel = require("../../models/addUser/addUserModel");
require("dotenv").config();
const privateKey = process.env.JWTPRIVETKEY;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({email});
    const addUserData = await AddUserModel.findOne({email});

    const userExists = await addUsersModel.find(
      { $and: [ {  "email":email }, { "active":false }  ] }
    )

    if(userExists && userExists.length){
      return res.status(200).send({
        type:"error",
        message:"User has no Login access",
      });
    }

    if (!user && !addUserData) {
      return res.status(401).send({
        type: "error",
        message: "Invalid email or user not exist",
      });
    }
    const isPasswordValid = user ?  await bcrypt.compare(password, user.password) : 
                          addUserData.password === password ? true : false;

    if (!isPasswordValid) {
      return res.status(401).send({
        type: "error",
        message: "Invalid password",
      });
    }

    const payload = {
      name: user ? user.uname :  addUserData.name,
      email: user ? user.email : addUserData.email,
    };

    const token = jwt.sign(payload, privateKey);

    const name = user ? user.name :  addUserData.name;
    const userId = user ? user._id : addUserData._id; 
    const userProfile = addUserData.profile;

    return res.status(200).send({
      type: "success",
      message: "Login successful",
      user: { name, userId, token , userProfile},
    });
  } catch (error) {
    console.log("Login error:", error);
    return res.status(500).send({
      type: "error",
      message: "Something went wrong during login",
      error: error,
    });
  }
};

module.exports = login;
