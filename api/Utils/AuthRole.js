const User = require("../models/user.model");

const AuthRole=async(req,res,next)=>{
     try{
        const user=await User.findById({_id:req.user.id});
        if(user){
            return res.status(403).json('YOU ARE NOT ALLOWED TO ACCESS THIS  RESOURCE');
        }
        next();
        }
        catch(e){
            console.log(e);
        }
}

module.exports=AuthRole;