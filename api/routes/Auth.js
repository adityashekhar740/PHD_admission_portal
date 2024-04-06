const express=require('express');
const Router=express.Router();
const {Signup,Signin,Logout} =require("../controllers/Auth.Controller");

Router.post('/signup',Signup);
Router.post('/signin',Signin);
Router.get('/logout',Logout);


module.exports=Router;