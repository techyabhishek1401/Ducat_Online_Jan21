const express = require('express');
const morgan=require('morgan');
require('dotenv').config()
const logger=require('./middleware/Logger');
const customerRouter=require('./routes/customer');
const app=express();
/* Template engine for dynamic html
pug,ejs,mustache
*/
app.set('view engine','pug');
app.set('views','./views');
console.log("env variables:",app.get('env'))
app.use(express.json());
app.use(express.static('public'));


app.use(logger);
// if(app.get('env')==='development'){
//     app.use(morgan('tiny'));
// }
if(process.env.ENV==='development'){
    app.use(morgan('tiny'));
}

app.use(function(req,res,next){
    console.log('authenticating');
    next();
});




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



app.get('/',(req,res)=>{
    res.render('Home',{title:'Home',message:'Welcome,you are at home'});
});

app.use('/api/customer',customerRouter);
const PORT=process.env.PORT || 8080; 

app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`);
})


