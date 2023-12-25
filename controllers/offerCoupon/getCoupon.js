const CouponOfferModel = require("../../models/couponOfferModel");

const showCoupon = async (req, res) => {
	try {
		const newCoupon = await CouponOfferModel.find({}).sort({createdAt:-1});
		res.status(200).json(newCoupon);
	} catch (error) {
		console.error("Coupon not added!!!", error);
		res.status(500).json({ error: "Coupon Not added" });
	}
};


module.exports = showCoupon;


