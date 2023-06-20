

const express = require("express");
const router = express.Router();
const { upload } = require("../middelwaer/diskStorage");
const felete = require("../controllers/DeleteMedia");


router.post('/api/delete', felete)
module.exports = router;

 
