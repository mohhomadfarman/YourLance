const mongoose = require('mongoose')
const express = require('express')
const dotenv = require("dotenv");
var cors = require('cors')
const app = express();
const registerRoutes = require("./router/registerRoutes");
app.use(cors())

const Local = "mongodb://localhost:27017/yourlance";
const Live = 'mongodb+srv://mohhomadfarman:Farman&321@cluster0.dxribwn.mongodb.net/';


app.use(express.json());
dotenv.config();


const DB = Live // Replace with your MongoDB connection URL
mongoose.connect(DB, {


}).then(() => {
    console.log("connected")
}).catch((err) => console.log("not connect"))


app.use(require('./router/auth'));

app.use("/api", registerRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});