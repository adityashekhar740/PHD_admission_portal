const AdminModel=require('../models/Admin.model');
const bcrypt=require('bcryptjs');
var jwt = require("jsonwebtoken");
const Signup=async(req,res)=>{
    const {name,email,password}=req.body;
    const hashedPassword=bcrypt.hashSync(password,10);
    try{
        const admin=await AdminModel.create({
        name:name,
        email:email,
        password:hashedPassword,
    });
    res.status(201).json(admin);
}
catch(e){
    res.status(500).json(e);
}

}
const Signin=async(req,res)=>{
    const admin= await AdminModel.findOne({email: req.body.email});
    if(!admin){
        return res.status(401).json({message:"Email is not registered"});
    }
    const isValidPass= bcrypt.compareSync(req.body.password,admin.password);
    if(!isValidPass){
        return res.status(401).json('WRONG CREDENTIALS');
    }
    const token=jwt.sign({id:admin._id},`${process.env.JWT_SECRET}`);
    const {password:pass,...rest}=admin._doc;
    res.cookie('admin_token',token,{httpOnly:true}).status(200).json(rest);
}

const Logout=async(req,res)=>{
    try{    
        res.clearCookie('admin_token').status(200).json('LOGGEDOUT SUCCESSFULLY...');
    }
    catch(e){
        res.status(500).json('Error in logging out');
    }
}
const GetAllApplication=async(req,res)=>{
    
}

module.exports={Signin,Signup,Logout,GetAllApplication};