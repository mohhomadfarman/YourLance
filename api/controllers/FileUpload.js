// const expressAsyncHandler = require("express-async-handler");
// const MediaUpload = require("../modals/FileUploadSchema");

// const FileUploadController = expressAsyncHandler(async (req, res) => {

//   const {ClientId} = req.body
//   let employee = new MediaUpload({
//     name: "req.file.originalname",
//     ClientId: req.body.ClientId,
//     fileUploadField: req.file.path
//   });
//   const dataToSave = await employee.save();
  
// try{
//   res.send({status: true})

// }catch{
//   res.send({status: false})

// }

// })


// module.exports = { FileUploadController };
