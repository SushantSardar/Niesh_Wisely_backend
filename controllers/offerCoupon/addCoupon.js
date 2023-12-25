const CouponOfferModel = require("../../models/couponOfferModel");


const createCoupon = async (req, res) => {
	try {
		const { couponName,discount,createdBy, updatedBy} = req.body;
		const newForm = await CouponOfferModel.create({ couponName, discount ,createdBy,updatedBy });
		await newForm.save();
		res.status(200).json({ message: "Coupon added successfully", newForm });
	} catch (error) {
		console.error("Coupon not added!!!", error);
		res.status(500).json({ error: "Coupon not added" });
	}
};

module.exports = createCoupon;