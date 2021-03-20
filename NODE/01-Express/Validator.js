function validateCustomer(req,res,next){
    const schema={
        name:Joi.string().min(3).required()
    }
   return Joi.validate(req.body,schema);
}
module.exports=validateCustomer