const UserModel = require('../models/user.model');
const QueryModel= require('../models/Queries.Model');


const UpdateUser = async (req, res) => {
     if (req.params.id !== req.user.id) {
    return res.status(403).json("YOU CAN ONLY UPDATE YOUR OWN INFORMATION");
  }
    const { username, email } = req.body;
    try {
        const user = await UserModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email
                }
            },
            { new: true }
        );
        const { password: pass, ...rest } = user._doc;
        res.status(200).json(rest);
    } catch (e) {
        res.status(500).json("CAN'T UPDATE USER");
    }
}

const FormApplied=async(req,res)=>{
     if (req.params.id !== req.user.id) {
    return res.status(403).json("YOU CAN ALTER YOUR OWN INFORMATION");
  }
    const {fid}=req.body;
   try{
     const user=await UserModel.findByIdAndUpdate(req.params.id,
        {
            $push:{
                formsApplied:fid
            }
        },
        {new:true}

    )
    const {password:pass,...rest}=user._doc;
    res.status(200).json(rest);
   }
   catch(e){
    res.status(500).json('Error in adding form to the user');
   }
}

const RaiseQuery=async(req,res)=>{
    if(req.user.id!=req.params.id){
        return res.status(403).json('YOU CAN ONLY RAISE A QUERY FROM YOUR OWN ACCOUNT');
    }    
    const {name,queryDescription,queryCategory,program}=req.body;
    try{
        const Query=await QueryModel.create({
            name,
            queryDescription,
             queryCategory,
             program,
             userRef:req.params.id
        })
        console.log(Query);
        res.status(200).json(Query);
    }
    catch(e){
        res.status(500).json('UNABLE TO RAISE QUERY');
    }
}

const GetRaisedQueries=async(req,res)=>{
    try{    
        const data=await QueryModel.find({userRef: req.params.id}).sort({createdAt:-1});
        res.status(200).json(data);
    }
    catch(e){
        res.status(500).json('THERE WAS A PROBLEM WHILE FETCHING  THE DATA');
    }
}

module.exports = { UpdateUser,FormApplied,RaiseQuery,GetRaisedQueries };
