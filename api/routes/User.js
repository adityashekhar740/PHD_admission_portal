const express=require('express');
const {UpdateUser,FormApplied}=require("../controllers/User.controller");
const Router=express.Router();

Router.post('/updateUser/:id',UpdateUser);
Router.post('/formApplied/:id',FormApplied);


module.exports=Router;