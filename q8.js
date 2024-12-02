const express = require("express");
const app = express();


app.get("/books",(req,res)=>{
    res.json({message: "this is home for mongodb"});
});






app.listen(9000, ()=>{
    console.log("app listening on http://localhost:9000");
});