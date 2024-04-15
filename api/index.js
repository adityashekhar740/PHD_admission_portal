const express=require('express');
const app=express();
const cors=require('cors');
const authRouter=require("./routes/Auth.js");
const ApplicationRouter=require("./routes/Application.js");
const AdminRouter=require('./routes/Admin.js');
const UserRouter =require('./routes/User.js');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const path=require('path');

dotenv.config();
const cookieParser=require('cookie-parser');
const __dir=path.resolve();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
//  this cookieParser should always be used before routes routes should be defined after this 
app.use('/api/auth',authRouter);
app.use('/api/application',ApplicationRouter);
app.use('/api/user',UserRouter);
app.use('/api/admin',AdminRouter);

app.use(express.static(path.join(__dir,'/frontend/dist')));

app.get('*',(req,res)=>{
    app.sendFile(path.join(__dir,'frontend','dist','index.html'));
})

mongoose.connect(`${process.env.PASS_KEY}`).then(()=>{
    console.log('db connected');
}).catch((e)=>{
    console.log(e);
})


app.listen(3000,()=>{console.log('Server started at port 3000')});