const mongoose = require('mongoose')
const express = require('express')
var cors = require('cors')
const app = express();
app.use(cors())

const Local = "mongodb://localhost:27017/yourlance";
const Live = 'mongodb+srv://yourlance:yourlance@atlascluster.hl7hbbc.mongodb.net';

app.use(express.json());


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


app.listen(4000, () =>{
    console.log("start")
})