
const expressAsyncHandler = require("express-async-handler");
const JobPosting = require("../modals/JobPostingSchema");
const dotenv = require("dotenv");

dotenv.config();
const JobPostApiController = expressAsyncHandler(async (req, res) => {
    const { clientname, clientId,title,AddSkills,ScopeOfyourWork,budget,Describe } = req.body;

    const data = new JobPosting({
        clientname: req.body.clientname,
        clientId: req.body.clientId,
        title: req.body.title,
        AddSkills: req.body.AddSkills,
        ScopeOfyourWork: req.body.ScopeOfyourWork,
        budget: req.body.budget,
        Describe: req.body.Describe,
      });

      try {
        const dataToSave = await data.save();
        // console.log(data, "data", ;truereq.body);
        res.status(200).send({success:true});
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
})

module.exports = { JobPostApiController };
