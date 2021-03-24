const  fs=require('fs');
console.log('Starting');

getUser(1,(user)=>{
    console.log("user:",user)
});

function getUser(id,callback){
    setTimeout(()=>{
        console.log('reading data from db');       
        callback({id,name:"abhi"})
    },2000);   
}
let userRecieved=true;
const getUserPromise=(id)=>{
  return  new Promise((resolve,reject)=>{
        if(userRecieved){
          setTimeout(()=>{
              console.log("PROMISE RESOLVED");
              resolve({id,name:"Success"})
          },4000)
        }
        else {
            setTimeout(()=>{
                console.log("PROMISE REJECT");
               reject("DB ERROR")
            },4000) 
        }
    })
}

getUserPromise(2).then((user)=>{
    console.log("user promised:",user);
}).catch(err=>{
    console.log("user promised error:",err); 
})



const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName,'UTF-8' ,(err, data) => {
        if (err) {
          reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
          return        // and we don't want to go any further
        }
        resolve(data)
      })
    })
  }
 getFile('./Dummy.txt').then(data=>{
     console.log("resolve")
     console.log(data);;
 }).catch(err=>{
     console.log("reject")
     console.error(err);
 }) 








    
//  let user= (id)=>{
//       return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('reading data from db');       
//             resolve({id,name:"bhola"})
//         },2000);   
//       })       
//     }
//     user(5).then(data=>console.log("user:",data)).catch(err=>{
//         console.log("err:",err)
//     })





/* 
callback,
promise,
async await
*/


console.log("ending");