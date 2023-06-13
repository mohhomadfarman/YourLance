const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    clientname: {
        type: String,
        required:false
    },
    title: {
        type: String,
        required:true
    },
    AddSkills: {
        type: String,
        required:true
    },
    ScopeOfyourWork: {
        type: String,
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
    Describe: {
        type: String,
        required: true
    }
    

})
userSchema.set('timestamps', true);

const JobPosting = mongoose.model('jobposting', userSchema)

module.exports = JobPosting