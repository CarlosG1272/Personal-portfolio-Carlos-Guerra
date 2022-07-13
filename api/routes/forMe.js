const express = require("express"); 
const { route } = require("./forFront");

const router = express.Router(); 

router.get("/", (req,res)=> {
    res.send("IZI PAPA")
})

module.exports = router; 