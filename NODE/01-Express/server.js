const express = require('express');

const app=express();

/* request methods 
 GET- for fetching the data.
 POST- for inserting the data,
 PUT- for updating the existing data,
 DELETE- for deleting the data 
 */ 

/* Route examples 
1- GET all customers ->/api/customer
2- GET particular customer -> /api/customer/id
3- PUT the existing Record-> /api/customer/id   (new data to be updated)
4- POST some data  --->/api/customer (data to be inserted);
5- DELETE some data  -->/api/customer/id
*/

let customer =[
    {id:1,name:'abc'},
    {id:2,name:'def'},
    {id:3,name:'ghi'},
]

app.get('/',(req,res)=>{
    res.send('<h1> Welcome To Express </h1>');
});

app.get('/api/customer',(req,res)=>{
  res.send(customer)
})

app.get('/api/customer/:id',(req,res)=>{

let cust=customer.find(cust=>cust.id==req.params.id);
    if(cust) {
        res.send(cust);
    }   
   else {
    res.status(404).send("The customer with given ID doesn't exist in our DB")  ;
   }
 
})

const PORT=process.env.PORT || 8080; 

app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`);
})