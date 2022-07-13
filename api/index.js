const app  = require("./app"); 
let PORT = app.get("PORT"); 

app.listen(PORT, ()=> {
    console.log(`Listening in port ${PORT}`);
})