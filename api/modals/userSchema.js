const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    Email: {
        type: String,
        required:true
    }
    ,  Number: {
        type: int,
        required:true
    },
    Password: {
        type: String,
        required:true
    },
    Cpassword: {
        type: String,
        required:true
    }
})

const User = mongoose.model('USER', userSchema)

module.exports = User