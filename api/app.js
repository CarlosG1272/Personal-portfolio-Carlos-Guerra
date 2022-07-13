const express = require("express"); 
const morgan = require("morgan"); 
const front = require("./routes/forFront"); 
const me = require("./routes/forMe"); 
const app = express(); 

app.set("PORT", process.env.port || 3001); 
app.use(morgan("dev")); 


app.use("/portfolioFront", front); 
app.use("/portfolioMe", me)


module.exports = app; 