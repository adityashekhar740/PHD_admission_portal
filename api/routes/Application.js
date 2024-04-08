const express=require('express');
const {submitForm,GetInProgressForms,GetCompletedForms} = require('../controllers/Application.controller');
const Router=express.Router();


Router.post('/submitForm',submitForm);
Router.get('/getInProgressForms/:id',GetInProgressForms);
Router.get('/getCompletedForms/:id',GetCompletedForms);


module.exports=Router;