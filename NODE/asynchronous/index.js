/* Synchronous vs Asynchronous
eg:// Synchronous: 1,2,3
alert(1); 
alert(2);  
alert(3);  

// Asynchronous: 1,3,2  (non -blocking)
alert(1);
setTimeout(() => alert(2), 0);
alert(3);

*/


console.log("I'm starting");


setTimeout(()=>console.log('2s delay'),2000);//after 2s

setTimeout(()=>console.log('0s delay'),0); 

console.log("I'm ending");
/*  my expected behaviour
I'm starting
0s delay
I'm ending
2s delay
*/


const listLocation=(locations)=>{
    locations.forEach((location)=>{
        console.log(location);
    });
}

const myLocations=['Noida','Delhi','Merut'];

listLocation(myLocations)
