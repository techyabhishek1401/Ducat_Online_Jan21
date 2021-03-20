const express=require('express');
const router=express.Router();
const Joi = require('joi');

let customers =[
    {id:1,name:'abc'},
    {id:2,name:'def'},
    {id:3,name:'ghi'},
]

router.get('/',(req,res)=>{
    console.log('fetching users...')
  res.send(customers)
})

router.get('/:id',(req,res)=>{

    let cust=customers.find(cust=>cust.id==req.params.id);
    if(!cust){
        return   res.status(404).send('User not found');
    }
    res.send(cust);
 
})

router.post('/',(req,res)=>{
    console.log("req.body:",req.body)
    const schema={
        name:Joi.string().min(3).required()
    }
   let result= Joi.validate(req.body,schema);
  //  const { name }=req.body  //de structuring      
    if(result.error){
        return  res.status(400).send(result.error.details[0].message);
       
    }
    let customer={
        id:customers.length+1,
        name:req.body.name
    }
    customers.push(customer);
    res.send(customers);
})

router.put('/:id',(req,res)=>{
    let cust=customers.find(cust=>cust.id==req.params.id);
    if(!cust){
        return   res.status(404).send('User not found');
    }
    const { name }=req.body
     const {error}=validateCustomer(req.body);
  
   
    if(error){
        res.status(400).send(error.details[0].message);
        return
    }
   cust.name=name;
   res.send(cust)
});


router.delete('/:id',(req,res)=>{
    let cust=customers.find(cust=>cust.id==req.params.id);
    if(!cust){
        return   res.status(404).send('User not found');
      
    }

    const index=customers.indexOf(cust);
    customers.splice(index,1);
    res.send(cust)

    //send the delete record
})
function validateCustomer(customer){
    const schema={
        name:Joi.string().min(3).required()
    }
   return Joi.validate(customer,schema);
}

module.exports=router