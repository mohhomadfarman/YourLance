const express = require("express");
const User = require("../modals/userSchema");
const JobPosting = require("../modals/JobPostingSchema");
const jwt = require('jsonwebtoken')
const secretkey="secretkey" 
const router = express.Router();
// const upload = multer({ dest: 'uploads/' })

const Middelware = (req, res, next) => {
  // console.log("object")

  next();
};

const bodyParser = require("body-parser");
const MediaUpload = require("../modals/FileUploadSchema");
const { upload } = require("../middelwaer/diskStorage");

// Apply body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());




router.get("/", (req, res) => {
  res.send("posteed");
});
router.post("/api/job-listing", async (req, res) => {
  const { id } = req.body;
  const jobListing = await JobPosting.find({ clientId: req.body.id });
  try {
    if(jobListing[0]){
      res.status(200).send(jobListing)
    }else{
      res.send([{error: "Post Your First Job!"}]);
    }
  }catch{
    res.status(400).send({ message: error.message });
    }
       

});

router.post("/usersDetails", async (req, res) => {
  const { id } = req.body;
  const findResult = await User.find({ _id : id });
  console.log(findResult);
  res.send(findResult);
});

router.post("/login", async (req, res) => {
  const { otp, email, password } = req.body;

  if (req.body.otp) {
    const Login = await User.find({ otp: req.body.otp });

    try {
      const dataToSave = await Login.validate();
    } catch {}
    console.log(Login[0].otp === otp, "dfghjkl");
    const otpVerify = Login[0].otp === otp;

    // const verifystatuis =  await User.updateOne({otp: otp, $set: {test: 1}});
    // console.log(verifystatuis)
   
    res.send({ otp: otpVerify });

  } else {
    const UserEmail = await User.findOne({ email: req.body.email });

    try {
      const dataToSave = await UserLogin.validate();
    } catch {}

    if (!UserEmail) {
      res.send({loginStatus: false, err: "User Dose not Exist" });
    } else if (UserEmail) {
      const LoginVeryfy =
        UserEmail.email === req.body.email &&
        UserEmail.password === req.body.password;
      if (LoginVeryfy) {
        // res.send({ loginStatus: LoginVeryfy, id: UserEmail.id });
        const token = jwt.sign({user:UserEmail},secretkey,{expiresIn:"8h"}) 

        res.json({loginStatus: LoginVeryfy,tokenuigiugitygtyigtyi:token})    
    
        console.log(token,"okkkkkk") 
      } else if (!LoginVeryfy) {
        res.send({loginStatus: false, err: "Password Dose not match" });
      }
    }
  }
});

router.post("/api/upload", upload.single('fileUploadField'), async (req, res) => {  
console.log(req.body)
console.log(req.file)
let employee = new MediaUpload({
 name: req.file.originalname,
ClientId: req.body.ClientId,
fileUploadField: req.file.path
});
const dataToSave = await employee.save();

res.send(dataToSave)

});




module.exports = router;
