const mongoose = require('mongoose')
const express = require('express')
const app = express();

const Local = "mongodb://localhost:27017/yourlance";
const Live = 'mongodb+srv://yourlance:yourlance@atlascluster.hl7hbbc.mongodb.net';

const DB = Local // Replace with your MongoDB connection URL
mongoose.connect(DB, {

    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log("connected")
}).catch((err) => console.log("not connect"))


const Middelware = (req, res, next) => {
    // console.log("object")

    next()
}

app.get('/', (req,res) =>{
    res.send("hello")
})

app.get('/login', Middelware, (req,res) =>{
    res.send("login")
})
app.get('/signup', (req,res) =>{
    res.send("signup")
})


app.listen(3000, () =>{
    console.log("start")
})