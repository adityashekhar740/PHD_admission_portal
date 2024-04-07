const express=require('express');
const {submitForm,GetInProgressForms} = require('../controllers/Application.controller');
const Router=express.Router();


Router.post('/submitForm',submitForm);
Router.get('/getInProgressForms/:id',GetInProgressForms);


module.exports=Router;