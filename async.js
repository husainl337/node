const fs = require("fs");

fs.open("test.txt","a+", (err) =>{
    if (err){
        console.error("error occured: ", err);
    }else{
        console.log("file created");
    }
    
    fs.writeFile("test.txt", "something written", (err)=>{
        if(err){
            console.error("error occured: ", err);
        } else{
            console.log("written successfully");
        }

        fs.readFile("test.txt","utf8",(err,data)=>{
            if(err){
                console.error("error occured: ",err);
            }else{
                console.log("file content:", data);
            }

            fs.writeFile("test.txt", "appended",null,(err)=>{
                if(err){
                    console.error("error occured",err);
                }else{
                    console.log("file appended");
                }
            });
        });
    });
});