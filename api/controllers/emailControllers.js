const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});



const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email, subject, message,otp, fullname } = req.body;
  console.log(email, subject, message,otp, fullname);

  let EmailTamplate = 
   
     `<div> <h3> Hi ${fullname}</h3> <h3> Your Email: ${email}</h3> <p>${message}</p> <p>Do Not Share Your OTP, Enter This OTP <b>${otp}</b> </p> </div>`
    
      

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: subject,
    text: `${email} ${message} ${otp}`,
    html: EmailTamplate
  
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
      
    }
  });
});

module.exports = { sendEmail };
