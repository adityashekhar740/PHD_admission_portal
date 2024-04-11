const express=require('express');
const {UpdateUser,FormApplied,RaiseQuery,GetRaisedQueries}=require("../controllers/User.controller");
const VerifyToken = require('../Utils/VerifyToken');
const Router=express.Router();

Router.post('/updateUser/:id',VerifyToken,UpdateUser);
Router.post('/formApplied/:id',VerifyToken,FormApplied);
Router.post('/raiseQuery/:id',VerifyToken,RaiseQuery);
Router.get('/getRaisedQueries/:id',VerifyToken,GetRaisedQueries);


module.exports=Router;