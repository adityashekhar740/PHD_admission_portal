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
}
},{timestamps:true});

const Application= mongoose.model("Application",applicationSchema);
module.exports=Application;