const fs = require("fs");

fs.open("dd.txt", "a+", (err, fdAsync)=>{
    if (err) {
        return console.error("async error:", err)
    }
    fs.write(fdAsync, "hellow world async\n", 0, (writeErr)=>{
        if(writeErr)
            return console.error("write error:", writeErr);
        
        const bufferAsync = Buffer.alloc(100);
        fs.read(fdAsync, bufferAsync, 0, 100, 0,(readErr)=>{
            if (readErr)
                console.error("read error:", readErr);
            console.log("async read:", bufferAsync.toString());

            fs.write(fdAsync, "appended ", null, (appendErr)=>{
                if(appendErr)
                    console.error("append error: ", appendErr);

            fs.close(fdAsync,(closeErr)=>{
                if(closeErr)
                    console.error("close error: ", closeErr);
            });
            });
        });
    });

});

// fs.unlink("dd.txt",(deleteErr)=>{
//     if(deleteErr){
//         console.error("error occured:", deleteErr)
//     }else{
//         console.log("file deleted synchronously")
//     }
// });