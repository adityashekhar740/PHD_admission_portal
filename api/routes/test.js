const express=require('express');
const { test } = require('../controllers/test.controlles');

const router=express.Router();

router.get('/testdata',test)



module.exports=router;