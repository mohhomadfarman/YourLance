const express = require('express')

const router = express.Router();

const Middelware = (req, res, next) => {
    // console.log("object")

    next()
}



router.get('/', (req,res) =>{
    res.send("hello2")
})

module.exports = router;