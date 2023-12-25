const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FactSheetSchema = new Schema({
	productName: { type: String, required: true, trim: true },
	category: { type: String, required: true },
	uploadFile: { type: String, required: true },


	// uploadFile: { type: Buffer },

	created_by: { type: String},
	updated_by: { type: String},

},
	{
		timestamps: true,
	}
)

const FactSheetModel = mongoose.model('FactSheet', FactSheetSchema);
module.exports = FactSheetModel;