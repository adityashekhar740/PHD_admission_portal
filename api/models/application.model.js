const mongoose=require('mongoose');

const applicationSchema=new mongoose.Schema({
personalDetails:{
    type:Object
},
parentDetails:{
},
addressDetails:{
    type:Object
},
declaration:{
    type:String
},
userRef:{
    type:String,
    required:true
},
formId:{
    type:String,
    required:true
},
status:{
    type:String, //pending/accepted/rejected
    default:"pending"
}
},{timestamps:true});

const Application= mongoose.model("Application",applicationSchema);
module.exports=Application;