

const express = require("express");
const router = express.Router();

const { JobPostApiController } = require("../controllers/JobPostApiController");
router.post('/job-post', JobPostApiController)

module.exports = router;

 
