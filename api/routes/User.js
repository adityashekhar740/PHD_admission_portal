const express=require('express');
const {UpdateUser,FormApplied}=require("../controllers/User.controller");
const VerifyToken = require('../Utils/VerifyToken');
const Router=express.Router();

Router.post('/updateUser/:id',VerifyToken,UpdateUser);
Router.post('/formApplied/:id',VerifyToken,FormApplied);


module.exports=Router;