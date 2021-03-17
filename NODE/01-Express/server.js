const express = require('express');
const Joi = require('joi');

const app=express();
app.use(express.json());
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

let customers =[
    {id:1,name:'abc'},
    {id:2,name:'def'},
    {id:3,name:'ghi'},
]

app.get('/',(req,res)=>{
    res.send('<h1> Welcome To Express </h1>');
});

app.get('/api/customer',(req,res)=>{
  res.send(customers)
})

app.get('/api/customer/:id',(req,res)=>{

  let cust=customers.find(cust=>cust.id==req.params.id);
    if(cust) {
        res.send(cust);
    }   
   else {
    res.status(404).send("The customer with given ID doesn't exist in our DB")  ;
   }
 
})

app.post('/api/customer',(req,res)=>{
    const schema={
        name:Joi.string().min(3).required()
    }
   let result= Joi.validate(req.body,schema);
  //  const { name }=req.body  //de structuring      
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return
    }
    let customer={
        id:customers.length+1,
        name:req.body.name
    }
    customers.push(customer);
    res.send(customers);
})

app.put('/api/customer/:id',(req,res)=>{
    let cust=customers.find(cust=>cust.id==req.params.id);
    if(!cust){
        res.status(404).send('User not found');
    }
    const { name }=req.body
     const {error}=validateCustomer(req.body);
  
   
    if(error){
        res.status(400).send(error.details[0].message);
        return
    }
   cust.name=name;
   res.send(cust)
})

const PORT=process.env.PORT || 8080; 

app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`);
})


function validateCustomer(customer){
    const schema={
        name:Joi.string().min(3).required()
    }
   return Joi.validate(customer,schema);
}