

const express = require("express");
const router = express.Router();
const { FileUploadController } = require("../controllers/FileUpload");
const { upload } = require("../middelwaer/diskStorage");


// router.post('/api/upload',upload.single('fileUploadField'), FileUploadController)
// // '/store',upload.single('avatar'),store
// module.exports = router;

 
