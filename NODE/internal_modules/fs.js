const fs =require('fs');
// console.log("FS:",fs.readFile)

// fs.readFile('../Git_Commands.txt','UTF-8', (err,success)=>{
//     if(err){
//         console.log("ERROR:",err)
//     }
//     else console.log("Succcess:",success);
// })

fs.readFile('./internal_modules/file.csv','UTF-8',(err,data)=>{
    if(err) console.log('error:',err);
    else {
     //   console.log('data:',data.split('\n'));
        let medicines=[];
        data.split('\n').map((medicine,index)=>{
           // console.log("medicine:",medicine.split(',')[1]);
           if(medicine.split(',')[1]!=='')
          //  medicines.push({name:medicine.split(',')[1],time:medicine.split(',')[4],test:medicine.split(',')[3]+'helo'});
         medicines.push(`${medicine.split(',')[1]},${medicine.split(',')[4]},\n`)
        });
       // console.log(medicines);
     //  console.table(medicines);\
     fs.writeFile('filteredMedine.csv',medicines.join(),(err,data)=>{
        if(err) console.log('error:',err)
        else console.log('done')
    })
    
    }
})

// fs.writeFile('testFile.txt','Say hello again to Write File',(err,data)=>{
//     if(err) console.log('error:',err)
//     else console.log('done')
// })


fs.appendFile('test.txt',' appending again',(err,data)=>{
    if(err)
    console.log("error in writing file:",err);
    else 
    console.log('success');
})