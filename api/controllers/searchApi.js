
const JobPosting = require("../modals/JobPostingSchema");
const searchApiController = async (req,res)=>{

    const {name,search} = req.body;
    
    try {

   const register_Data = await JobPosting.find({title: req.body.search}) 


       if(register_Data.length > 0) {
res.status(200).send({success:true,msg:"registration details",Data:register_Data})

       }else {
        res.status(200).send({success:false,msg:"registration name not found"})
       }
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
}
module.exports= searchApiController;


