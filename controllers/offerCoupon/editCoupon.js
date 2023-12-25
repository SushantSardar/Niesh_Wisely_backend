const CouponOfferModel = require("../../models/couponOfferModel");

const EditCoupon = async (req, res) => {

    try {
        const Id = req.params.id;
        const { couponName, discount, createdBy, updatedBy } = req.body;
        
        const updates = {
            couponName,discount,createdBy,updatedBy
        }
        // console.log("id", Id)

        const payload = {

        }

        Object.keys(updates).forEach(key=>{
            if(updates[key]!=null && updates[key]!==""){
                payload[key]=updates[key]
            }
        })
        // console.log(payload)

        // Update the user in the database
        const updatedCoupon = await CouponOfferModel.findByIdAndUpdate(
            Id,
            { $set: payload },
            { new: true } // Return the updated document
        );

        if (!updatedCoupon) {
            return res.status(404).json({ error: 'Coupon not found' });
        }

        res.json({ message: 'Coupon updated successfully', updatedCoupon });
    } catch (error) {
        console.error('Error updating Coupon:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = EditCoupon;
