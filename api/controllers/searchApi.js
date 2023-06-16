// const res = require("express/lib/response")
// const registermodel = require("../modals/userSchema")

const JobPosting = require("../modals/JobPostingSchema");
// const  jobpost = require('../modals/')
const searchProduct = async (req,res)=>{

    const {name} = req.body;
    
    try {
        // var search = req.body.search

   const register_Data = await JobPosting.find({"clientname": {$regex:req.body.search,$options:'i'}}) 
//    const register_Data = await JobPosting.find({clientname: req.body.name}) 
   
//    const register_Data =    await  registermodel.find({"fullname":  {$regex:".*"+ req.body.search+".*",$options:'i'}})

       if(register_Data.length > 0) {
res.status(200).send({success:true,msg:"registration details",Data:register_Data})

       }else {
        res.status(200).send({success:false,msg:"registration name not found"})
       }
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
}
module.exports= searchProduct;


