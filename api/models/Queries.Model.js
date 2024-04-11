const mongoose=require('mongoose');

const QueriesSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    queryCategory:{
        type:String,
        required:true
    },
    queryDescription:{
        type:String,
        required:true
    },
    program:{
        type:String,
    },
    response:{
        type:String,
        default:'pending'
    },
    userRef:{
        type:String,
        required:true
    },
},{timestamps:true})

const  Queries = mongoose.model("Queries",QueriesSchema);
module.exports=Queries;