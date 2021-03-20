
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

/* 
callback,
promise,
async await
*/


console.log("ending");