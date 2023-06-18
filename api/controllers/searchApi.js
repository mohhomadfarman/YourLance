
const JobPosting = require("../modals/JobPostingSchema");
const searchProduct = async (req,res)=>{

    const {name} = req.body;
    
    try {

   const register_Data = await JobPosting.find({"title": {$regex:req.body.search,$options:'i'}}) 


       if(register_Data.length > 0) {
res.status(200).send({success:true,msg:"Jobs details",Data:register_Data})

       }else {
        res.status(200).send({success:false,msg:"No data found"})
       }
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
}
module.exports= searchProduct;


