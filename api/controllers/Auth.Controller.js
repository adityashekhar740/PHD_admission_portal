const UserModel=require("../models/user.model");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const Signup=async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        return res.status(400).json('Please enter All the fields');
    }
   try{
    const hashedPassword=bcrypt.hashSync(password,10);
     const user=await UserModel.create({
        username:username,
        email:email,
        password:hashedPassword
    })
    res.status(200).json(user);
   }
   catch(e){
    res.status(500).json('Some error occured or change the credentials');
   }
}

const Signin=async(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).json('PLEASE ENTER ALL FIELDS')
    }
    const user=await UserModel.findOne({username:username});
    if(!user){
        return res.status(401).json('USER  NOT FOUND');
    }
    const isValidPass=bcrypt.compareSync(password,user.password);
    if(!isValidPass){
        return res.status(401).json('WRONG CREDENTIALS');
    }
    const token=jwt.sign({id:user._id},`${process.env.JWT_SECRET}`)
    //now i'm creating a access  token and sending it back in the response
    const {password:pass,...rest}=user._doc;
    res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
}

const Logout=async(req,res)=>{
    try{
        res.clearCookie( 'access_token');
        res.status(200).json('Logged Out SUCCESSFULLY');
    }
    catch(e){
        res.status(500).json('UNABLE TO lOG OUT');
    }
}

module.exports={Signup,Signin,Logout};