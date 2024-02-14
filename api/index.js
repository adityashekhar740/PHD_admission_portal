const express=require('express');
const app=express();
const testRouter=require('./routes/test.js');
const cors=require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/test',testRouter);

app.listen(3000,()=>{console.log('Server started at port 3000')});