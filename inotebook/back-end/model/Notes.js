const mongoose=require('mongoose');
const NotesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    tag:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
});

module.exports=mangoose.module('notes',NotesSchema);