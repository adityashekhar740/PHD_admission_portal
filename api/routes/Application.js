const express=require('express');
const {submitForm} = require('../controllers/Application.controller');
const Router=express.Router();


Router.post('/submitForm',submitForm);


module.exports=Router;