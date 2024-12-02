const fs = require("fs");
try {
    const fdSync = fs.openSync("bb.txt", "w+");

    fs.writeSync(fdSync, "hey", 0);

    const bufferSync = Buffer.alloc(100);
    fs.readSync(fdSync, bufferSync, 0,100,0);
    console.log("file content: ", bufferSync.toString());

    fs.writeSync(fdSync,"appended :", null);

    fs.closeSync(fdSync);

} catch(error){
    console.error("Sync error: ", error);
}

// try {
//     fs.unlinkSync("bb.txt");
//     console.log("file deleted synchronously")
// } catch(err){
//     console.error("error occured:", err)
// }