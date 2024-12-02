const http = require("http");
const url = require("url");

const server = http.createServer((req, res)=>{
    console.log(req)
    res.end("you are it");
    
});
server.listen(8000)
console.log("http://localhost:8000/");
