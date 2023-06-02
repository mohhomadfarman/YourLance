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

router.post("/register", async (req, res) => {
  // console.log(req.body)
  // console.log(res, "cxvxcv");
  const data = new User({
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const dataToSave = await data.save();
    // console.log(data, "data", req.body);
    res.status(200).send(dataToSave);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
  // console.log('hiii')
  res.send('asdasd')
});

router.get("/", (req, res) => {
  res.send("posteed");
});

router.get("/userslists", async (req, res) => {
  const findResult = await User.find();
  console.log(findResult)
  res.send(findResult);

});


router.post("/login", async (req, res) => {
  const Login = await User.findOne({ username: req.body.username,
    password: req.body.password,
  });


  
  // console.log(Login,"dfghjkl")
  res.send(Login);

}

);


module.exports = router;
