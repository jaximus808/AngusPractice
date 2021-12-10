//Get express from package.json and store it in express constant
//express is a module/package (think of DLC) that allows user to create server
const express = require("express");
//store express constant inside of app constant
const app = express();
const path = require("path")

//.get listens for a get request on route /ball, if there is a get request on route /ball run the arrow function
app.get("/ball",(req,res) =>
{

    res.sendFile(path.join(__dirname, "client", "index.html"));
})
//.listen listens for a signal on port ___(3000), then runs console.log if the signal is successfully recieved
app.listen(3000,console.log("Server up"))
