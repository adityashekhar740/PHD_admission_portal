const AdminModel=require('../models/Admin.model');
const ApplicationModel=require('../models/application.model');
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
    try{
        const all=await ApplicationModel.find({
        status:{$in:['pending','MFR']},
    });
    res.status(200).json(all);
    }
    catch(e){
        res.status(500).json('ERROR WHILE FETCHING INFO...');
    }
}
const SetStatus=async(req,res)=>{
    try{
        const updatedAppn=await ApplicationModel.findByIdAndUpdate(req.params.id,{
            $set:{
                status:req.body.status
            }
        },{new:true})
        res.status(200).json(updatedAppn);
    }
    catch(e){
        res.status(500).json("CAN'T UPDATE STATUS");
    }
}
const GetAllApproved=async(req,res)=>{
     try{
        const allapp=await ApplicationModel.find({
        status:'accepted',
    });
    console.log(allapp);
    res.status(200).json(allapp);
    }
    catch(e){
        res.status(500).json('ERROR WHILE FETCHING INFO...');
    }
    
}

const GetAllRejected=async(req,res)=>{
    try{
        const allappn=await ApplicationModel.find({
            status:'rejected'
        }) 
        res.status(200).json(allappn);
    }
    catch(e){
        res.status(500).json('ERROR WHILE FETCHING INFO...');
    }
}

module.exports={Signin,Signup,Logout,GetAllApplication,SetStatus,GetAllApproved,GetAllRejected};