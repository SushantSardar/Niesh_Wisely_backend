const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CouponOfferSchema = new Schema({
	couponName: { type: String , required: true,trim: true },
	discount: { type: Number , required: true},
	createdBy: { type : String, required: true},
	updatedBy: { type : String, default:"None"}
},
	{
		timestamps: true,
	}
)


const CouponOfferModel = mongoose.model('Coupon', CouponOfferSchema);
module.exports = CouponOfferModel;