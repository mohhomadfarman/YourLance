const express = require("express");
const router = express.Router();

const { UserRegister } = require("../controllers/registerControllers");

router.post("/UserRegister", UserRegister);

module.exports = router;
