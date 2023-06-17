const mongoose = require('mongoose')
const express = require('express')
const dotenv = require("dotenv");
var cors = require('cors')
  const app = express();
const registerRoutes = require("./router/registerRoutes");
const searchRoutes = require('./router/searchAPI');
const JobpostApi = require('./router/JobpostApi');
const FileUploadApi = require('./router/FileUpload');
app.use(cors())

const DBLogin =  process.env.DATABASE;



app.use(express.json());
app.use(express.urlencoded({extended:false}));

dotenv.config();


const DB = DBLogin // Replace with your MongoDB connection URL
mongoose.connect(DB, {


}).then(() => {
    console.log("connected")
}).catch((err) => console.log("not connect"))


app.use(require('./router/auth'));

app.use("/api", registerRoutes);
app.use("/api", searchRoutes);
app.use("/api", JobpostApi);
// app.use("/api", FileUploadApi);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});