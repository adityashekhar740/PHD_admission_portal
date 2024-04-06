const UserModel  = require('../models/user.model');
const UpdateUser=async(req,res)=>{
    const {username,email}=req.body;
    try{
        const user=await UserModel.findByIdAndUpdate(req.params.id,
       {
         $set:{
            username:username,
            email:email
        }
       },
        {new:true}
        )
        user.save();
        const {password:pass,...rest}=user._doc;
        res.status(200).json(rest);
            
    
    }
    catch(e){
        res.status(500).json("CAN'T UPDATE USER");
    }
}


module.exports={UpdateUser};