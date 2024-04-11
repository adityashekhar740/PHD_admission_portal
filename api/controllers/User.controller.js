const UserModel = require('../models/user.model');

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

module.exports = { UpdateUser,FormApplied };
