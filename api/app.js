const mongoose = require('mongoose')
const express = require('express')
const dotenv = require("dotenv");
var cors = require('cors')
  const app = express();
const registerRoutes = require("./router/registerRoutes");
app.use(cors())

const DBLogin =  process.env.DATABASE;



app.use(express.json());
dotenv.config();


const DB = DBLogin // Replace with your MongoDB connection URL
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