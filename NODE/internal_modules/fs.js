const fs =require('fs');
// console.log("FS:",fs.readFile)

fs.readFile('../Git_Commands.txt','UTF-8', (err,success)=>{
    if(err){
        console.log("ERROR:",err)
    }
    else console.log("Succcess:",success);
})