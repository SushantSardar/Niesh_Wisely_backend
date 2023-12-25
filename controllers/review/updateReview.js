const reviewModel = require("../../models/reviewModel");

const updateReview = async (req, res) => {
   
        let review_id = req.params.id
        // console.log(review_id)
        try {
            const updateReview={
              
                approvalValue,
               
              } = req.body;
              // console.log(updateReview)
          let review = reviewModel.findById(review_id)
          if (!review) {
            return res.status(400).json({
              message: "no products found"
            })
          }
          let oneReview = await reviewModel.findByIdAndUpdate(review_id, { $set: updateReview }, { new: true })
          res.status(202).json({
            result: "updated sucessfully",
            productDetails: oneReview
          })
          // console.log(oneReview)
        }
        catch (err) {
      
        }
      
};

module.exports = updateReview;
