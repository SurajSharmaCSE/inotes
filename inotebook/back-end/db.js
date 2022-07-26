const mangoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/"

const connectTomango=()=>
{
   mangoose.connect(mongoURI,()=>{
    console.log("connection succesdfully");
   })
}

module.exports=connectTomango;