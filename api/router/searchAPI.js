const express = require("express")
// const app = express()
const router = express.Router()
const searchApiController = require('../controllers/searchApi')
router.get('/search',searchApiController)

module.exports=router 
 
