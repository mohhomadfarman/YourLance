

const MediaUpload = require("../modals/FileUploadSchema");

const felete = async (req, res) => {
console.log(req.body, "qweqwe");

const data = await MediaUpload.findByIdAndDelete(req.body.id)   

  console.log(data,"ok empty");
  if (!data) {
    console.log("user not found");
    return res.status(400).json("USER NOT FOUND");
  }
  if (data) {
    console.log({ message:"deleted document sucesufully", success:true});
    return res
      .status(200)
      .json({ message: "deleted document sucesufully", success:true});
  }
};
module.exports = felete;