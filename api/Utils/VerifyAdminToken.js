const jwt=require('jsonwebtoken');

const VerifyAdminToken=(req,res,next)=>{
    const token=req.cookies.admin_token;
    if(!token){
       return res.status(401).json('ADMIN UNAUTHORIZED');
    }
    jwt.verify(token,process.env.JWT_SECRET,(error,user)=>{
        if(error)res.status(403).json("FORBIDDEN TOKEN YOU'RE NOT ALLOWED TO ACCESS THIS RESOURCE");
        req.user=user;
        next();
    })
}

module.exports=VerifyAdminToken;