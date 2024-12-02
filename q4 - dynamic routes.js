const express = require("express");
const http = require("http");
const app = express();


app.get("/users/:id", (req,res)=>{
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

http.createServer(app).listen(7000, 'localhost');
console.log("running at http://localhost:7000")