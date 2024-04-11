const express=require('express');
const {submitForm,GetInProgressForms,GetCompletedForms} = require('../controllers/Application.controller');
const VerifyToken = require('../Utils/VerifyToken');
const AUthRole = require('../Utils/AuthRole');
const Router=express.Router();


Router.post('/submitForm',submitForm);
Router.get('/getInProgressForms/:id',VerifyToken,GetInProgressForms);
Router.get('/getCompletedForms/:id',VerifyToken,GetCompletedForms);


module.exports=Router;