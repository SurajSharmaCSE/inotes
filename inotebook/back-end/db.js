// connecting mangoose 
const mangoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/" // connect to mangodb local host using this url

// it is basically a function that use as ansure our databse connect i.e for export perpose
const connectTomango=()=>
{
   mangoose.connect(mongoURI,()=>{
    console.log("connection succesdfully");
   })
}

module.exports=connectTomango;