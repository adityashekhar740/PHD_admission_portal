const express=require('express');
const app=express();
const testRouter=require('./routes/test.js');
const cors=require('cors');
const authRouter=require("./routes/Auth.js");
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();
const cookieParser=require('cookie-parser');

app.use(express.json());
app.use(cors());
app.use('/api/test',testRouter);
app.use('/api/auth',authRouter);
app.use(cookieParser());

mongoose.connect(`${process.env.PASS_KEY}`).then(()=>{
    console.log('db connected');
}).catch((e)=>{
    console.log(e);
})


app.listen(3000,()=>{console.log('Server started at port 3000')});