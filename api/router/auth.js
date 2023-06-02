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

  
  // try {
  //   // Perform login API request
  //   const response = await fetch('/login', {
  //     method: 'POST',
  //     // Include login data here
  //     body: JSON.stringify({ username, password }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (response.ok) {
  //     const user = await response.json();
  //     // Login successful, do something
  //     res.status(200).send(Login)
  //     res.status(200).send({successsssssssssssssssssss:true});
  //   } else {
  //     throw new Error('Login failed');
  //   }
  // } catch (error) {
  //   res.status(400).send({ message: error.message });
  // }

}

);


module.exports = router;
