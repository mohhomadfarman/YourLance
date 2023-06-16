const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    clientname: {
        type: String,
        required:false
    },
    clientId: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    AddSkills: {
        type: Array,
        required:true
    },
    ScopeOfyourWork: {
        type: Array,
        required:true
    },
    budget: {
        type: String,
        required:true
    },
    Describe: {
        type: String,
        required: true
    },

    

})
PostSchema.set('timestamps', true);

const JobPosting = mongoose.model('jobposting', PostSchema)

module.exports = JobPosting