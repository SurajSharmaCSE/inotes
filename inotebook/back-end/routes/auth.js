const express=require('express');
const User=require('../model/User');
const router=express.Router();

// Create a User using POST "/api/auth". Doesn't require auth
router.post('/',(req,res)=>{
   
   console.log(req.body);
   const user=User(req.body);
   user.save()
   res.send("Hello Suraj");
})

module.exports=router