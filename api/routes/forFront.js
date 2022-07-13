const express = require("express"); 

const router = express.Router(); 


router.get("/", (req,res)=> {
    res.send("Todo is ok")
})



module.exports = router; 