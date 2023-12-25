const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const capSchema =  new Schema({
    capCategory : {type : String },
    capPrice : {type : Number},
    capDuration: {type : Number},
    isActive: {type: Boolean}
})

const NewProductSchema = new Schema({
    productName: { type: String , required: true},
    productType: { type: String , required: true },
    description: { type: String},
    shortDescription: { type: String},
    uploadFile: { type: String},
    // createdAt: { type: String },
    // updatedAt: { type: String },
    caps: [capSchema]
},
{
    timestamps: true,
})

const NewProductModel = mongoose.model('newProduct', NewProductSchema);
module.exports = NewProductModel;