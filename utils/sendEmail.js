const nodemailer = require("nodemailer")

const sendMail = async (email,subject,randomToken) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            port: Number(587),
            secure: false,
            auth: {
                user: "sushant.jambwale@techisor.com",
                pass: "Sushant@321",
            },
        });
        const mailOptions = {
            from:"sushant.jambwale@techisor.com",
            to: email,
            subject: subject,
            text:"Your OTP for password Reset is :- "+ `${randomToken}`+". Dont share it with anybody.",
            // attachments: [
            //     {
            //         filename: "HD-wallpaper-christmas-wishes-greetings-message-christmas-wishes.jpg",
            //         content: imageContent,
            //         encoding: "base64",
            //         cid: "image1",
            //     },
            // ],
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("✌️sendMail error --->", error);
            } else {
                console.log(`Mail successfully sent to ${email} `);
            }
        });
        
    } catch (error) {
        console.log("email not sent!");
        console.log(error);
        return error;
    }
}

module.exports = sendMail;