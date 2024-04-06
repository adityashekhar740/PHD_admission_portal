const express=require('express');
const Router=express.Router();
const {Signin,Signup,Logout} = require('../controllers/Admin.controller');
Router.post('/auth/signup',Signup);
Router.post('/auth/signin',Signin);
Router.get('/auth/logout',Logout);

module.exports=Router;