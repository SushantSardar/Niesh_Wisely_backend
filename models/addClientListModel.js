const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: { type: String },
  productPrice: { type: Number },
  productDuration:{type:Number},
  fromDate: { type: Date },
  toDate: { type: Date },
  paidAmount: { type: Number },
  dueAmount: { type: Number },
  serviceEndDate: { type: Date },
  serviceStatus: { type: String },
  kycStatus: { type: String },
  saStatus: { type: String }, 
});

const clientListSchema = new Schema(
  {
    userName: { type: String, required: true, trim: true },
    password: { type: String },
    name: { type: String },
    clientPhoneNumber: { type: Number },
    email: { type: String },
    products: [productSchema], // Embed the product schema here as an array
    uniqueClientCode: { type: Number, unique: true },
    deviceToken: { type: String, default: null },
    createdBy: { type : String, required: true},
    updatedBy: { type : String, default:"None"},
  },
  {
    timestamps: true,
  }
);

clientListSchema.pre("save", function (next) {
  // Generate a random unique client code using crypto module
  this.uniqueClientCode = generateUniqueClientCode();
  next();
});

// Function to generate a random unique client code
function generateUniqueClientCode() {
  const min = 1;
  const max = 9999999999;
  const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomCode;
}

const ClientModel = mongoose.model("client", clientListSchema);
module.exports = ClientModel;
