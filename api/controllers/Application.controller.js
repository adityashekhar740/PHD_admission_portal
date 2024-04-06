const ApplicationModel=require('../models/application.model');

const submitForm=async(req,res)=>{
    const {personalDetails,parentDetails,addressDetails,declaration}=req.body;

    try{
        const appn=await ApplicationModel.create({
        personalDetails:personalDetails,
        parentDetails:parentDetails,
        addressDetails:addressDetails,
        declaration:declaration,
    });
    res.status(200).json(appn);
    }
    catch(e){
        res.status(500).json('Error in submitting the form');
    }
} 

module.exports={submitForm}