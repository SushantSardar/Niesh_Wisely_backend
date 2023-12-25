const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
	productName: { type: String, trim: true },
	productType: { type: String },
	category: { type: String },
	price: { type: Number },
	duration: { type: Number },
	isActive: { type: Boolean, default: true },
	description: { type: String },
	shortDescription: { type: String },
	uploadFile: { type: String },
	created_by: { type: String },
	updated_by: { type: String },

},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Product', ProductSchema);
