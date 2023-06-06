const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const User = require("../modals/userSchema");
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
  const { email, fullname, mobile } = req.body;
  console.log(email, fullname,mobile );

  let otp = Math.floor(Math.random(1000 > 10000) * 9000);

  const data = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
    otp: otp
  });

  try {
    const dataToSave = await data.save();
    // console.log(data, "data", ;truereq.body);
    res.status(200).send({success:true});
  } catch (error) {
    res.status(400).send({ message: error.message });
  }




  let EmailTamplate =  `<div> <h4> Hi ${fullname}</h4> <h4> Your Email: ${email}</h4><p>Do Not Share Your OTP, Enter This OTP <b>${otp}</b> </p> </div>`;
    
  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "YourLance - OTP Veryfication",
    text: `${email} ${otp}`,
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
