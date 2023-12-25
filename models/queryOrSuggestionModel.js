const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuerySchema = new Schema({
	customerName: { type: String , trim: true },
	queryDescription: { type: String , required: true},
},
	{
		timestamps: true,
	}
)


const QueryModel = mongoose.model('Query', QuerySchema);
module.exports = QueryModel;