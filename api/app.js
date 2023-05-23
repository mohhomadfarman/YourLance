const mongoose = require('mongoose')
const express = require('express')
const app = express();

const Local = "mongodb://localhost:27017/yourlance";
const Live = 'mongodb+srv://yourlance:yourlance@atlascluster.hl7hbbc.mongodb.net';

// const User = require('./modals/userSchema')

const DB = Local // Replace with your MongoDB connection URL
mongoose.connect(DB, {

    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log("connected")
}).catch((err) => console.log("not connect"))


app.use(require('./router/auth'));




// app.get('/login',(req,res) =>{
//     res.send("login")
// })
// app.get('/signup', (req,res) =>{
//     res.send("signup")
// })


app.listen(3000, () =>{
    console.log("start")
})