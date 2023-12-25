
const CouponOfferModel = require("../../models/couponOfferModel");


const ShowCouponByID = async (req, res) => {
	try {
        const id = req.params.id;

		const newCoupon = await CouponOfferModel.findById(id);
        // console.log("res",newCoupon)
		res.status(200).json(newCoupon);
        
	} catch (error) {
		console.error("Coupon not added!!!", error);
		res.status(500).json({ error: "Coupon Not added" });

	}
};


module.exports = ShowCouponByID;


