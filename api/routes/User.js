const express=require('express');
const {UpdateUser}=require("../controllers/User.controller");
const Router=express.Router();

Router.post('/updateUser/:id',UpdateUser);


module.exports=Router;