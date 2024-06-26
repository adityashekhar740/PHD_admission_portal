const express=require('express');
const Router=express.Router();
const {Signin,Signup,Logout,GetAllApplication,SetStatus,GetAllApproved,GetAllRejected,AllQueries,ReplyQuery} = require('../controllers/Admin.controller');
const VerifyAdminToken = require('../Utils/VerifyAdminToken');
const AuthRole = require('../Utils/AuthRole');
Router.post('/auth/signup',Signup);
Router.post('/auth/signin',Signin);
Router.get('/auth/logout',Logout);
Router.get('/application/getAll',VerifyAdminToken,AuthRole,GetAllApplication);
Router.post('/setStatus/:id',VerifyAdminToken,AuthRole,SetStatus);
Router.get('/application/getAllApproved',VerifyAdminToken,AuthRole,GetAllApproved);
Router.get('/application/getAllRejected',VerifyAdminToken,AuthRole,GetAllRejected);
Router.get('/allQueries',VerifyAdminToken,AuthRole,AllQueries);
Router.post('/replyQuery/:id',VerifyAdminToken,AuthRole,ReplyQuery);
module.exports=Router;