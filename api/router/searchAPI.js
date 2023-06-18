
const express = require("express");
const router = express.Router();
const searchApiController = require('../controllers/searchApi')

router.post("/search", searchApiController);

module.exports = router;

