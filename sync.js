const fs = require("fs");
try{
    fs.openSync("text.txt","w+");

fs.writeFileSync("text.txt","hello");

const data = fs.readFileSync("text.txt","utf8");
console.log("file content: ", data);
} catch(err){
    console.error("error occured:", err);
}
