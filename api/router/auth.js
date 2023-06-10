const express = require("express");
const User = require("../modals/userSchema");

const router = express.Router();

const Middelware = (req, res, next) => {
  // console.log("object")

  next();
};

const bodyParser = require("body-parser");

// Apply body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("posteed");
});

router.get("/userslists", async (req, res) => {
  const findResult = await User.find();
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
    res.send({ otp: otpVerify });
  } else {
    const UserEmail = await User.findOne({ email: req.body.email });
    try {
      const dataToSave = await UserLogin.validate();
    } catch {}

    if (!UserEmail) {
      res.send({ err: "User Dose not Exist" });
    } else if (UserEmail) {
      const LoginVeryfy =
        UserEmail.email === req.body.email &&
        UserEmail.password === req.body.password;
      if (LoginVeryfy) {
        res.send({ loginStatus: LoginVeryfy });
      } else if (!LoginVeryfy) {
        res.send({ err: "Password Dose not match" });
      }
    }
  }
});

module.exports = router;
