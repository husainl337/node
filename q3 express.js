const express = require("express");
const http = require("http");
const app = express();


app.get("/",(req,res)=>{
    res.send("HOME PAGE");
});

app.get("/about",(req,res)=>{
    res.send("this is ABOUT PAGE");
});

// http.createServer(app).listen(8000, "localhost");
// console.log("running at http://localhost:8000")
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
});