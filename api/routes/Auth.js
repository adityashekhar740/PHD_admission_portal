const express=require('express');
const Router=express.Router();
const {Signup,Signin} =require("../controllers/Auth.Controller");

Router.post('/signup',Signup);
Router.post('/signin',Signin);


module.exports=Router;