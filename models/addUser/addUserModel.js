const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddUserSchema = new Schema({
  name: { type: String, trim: true },
  email: {type: String },
  mobileNumber: { type: Number  },
  userName: { type: String  },
  password: { type: String  },
  profile: { type: String  },
  active:{type:Boolean , default:true},

  created_by: { type: String },
  updated_by: { type: String},
},
  {
    timestamps: true,
  }
);

const AddUserModel = mongoose.model('AddUsersData', AddUserSchema);
module.exports = AddUserModel;
