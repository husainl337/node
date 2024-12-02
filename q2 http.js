const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        fs.readFile("(For Ques2) index.html",(err,content)=>{
            res.writeHead(200,{"Content-Type": "text/html"});
            res.end(content);
        });
    } 

    else if(req.url ==="/dynamic"){
        const dynamicContent = `
        <html>
            <body>
                <h1>dynamic page</h1>
                <p>time: ${new Date()}</p>
            </body>
        </html>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(dynamicContent);
    }

    else{
        res.writeHead(404);
        res.end("page not found")
    }
});

server.listen(4000,()=>{
    console.log("running at http://localhost:4000");
});