const express = require("express");
const http = require("http");
const app = express();


const customMidware = (req,res,next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    req.customData = "this is added by midware"
    next();
};

app.use(customMidware);

app.get("/", (req,res) => {
    res.send({
        Message: "hello express",
        customData: req.customData,
    });
});

app.use((err,req,res,next)=>{
    console.error("error occured",err.stack);
    res.status(500).send("something broke");

});

app.listen(4000,()=>{
    console.log(`running at http://localhost:4000`)
});