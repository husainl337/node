const express = require("express");
const http = require("http");
const router = express();

router.get("/users",(req,res)=>{
    try{
        res.json({message: "get all users"});
    }catch(error){
        res.json({error: "error occured"});
    }
});

router.get("/users/:id",(req,res)=>{
    try{
        const usersId = req.params.id;
        res.json({message: `get users id by: ${usersId}`});
    }catch(error){
        res.json({ error: "error occured"});
    }
});

router.post("/users",(req,res)=>{
    try{
        const userData = req.body;
        res.json({message:"user created"});
    }catch (error){
        res.json({error: "error occured"});
    }
});

http.createServer(router).listen(8000,'localhost');
console.log("running at http://localhost:8000")