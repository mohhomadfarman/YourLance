const mongoose = require('mongoose')
const express = require('express')
const dotenv = require("dotenv");
var cors = require('cors')
  const app = express();
const registerRoutes = require("./router/registerRoutes");
const searchRoutes = require('./router/searchAPI');
const JobpostApi = require('./router/JobpostApi');
const FileUploadApi = require('./router/FileUpload');
const deleteMedia = require('./router/Delete');
app.use(cors())

const DBLogin =  process.env.DATABASE;


app.use(express.json());
app.use(express.urlencoded({extended:false}));

dotenv.config();

mongoose.connect(DBLogin, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});




app.use(require('./router/auth'));

app.use("/api", registerRoutes);
app.use("/api", searchRoutes);
app.use("/api", JobpostApi);
app.use("/api", deleteMedia);
// app.use("/api", FileUploadApi);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});