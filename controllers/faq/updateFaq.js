const questionModel = require("../../models/questionModel");


const updateFaq = async (req, res) => {
    try {
        const faqId = req.params.id; // Assuming the id is passed as a route parameter
        // console.log(faqId)

        const {
            question,
            description,
            pageFor,
        } = req.body;
;
        const updatedFaq = await questionModel.findByIdAndUpdate(
            faqId,
            {
                question,
                description,
                pageFor,
            },
            { new: true }
        );

        if (!updatedFaq) {
            return res.status(404).json({ error: "faq not found" });
        }

        res.status(200).json({ message: "faq updated successfully", updatedFaq });
    } catch (error) {
        console.error("faq not updated!!!", error);
        res.status(500).json({ error: "faq not updated" });
    }
};

module.exports = updateFaq;
