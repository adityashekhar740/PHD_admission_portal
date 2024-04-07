const ApplicationModel=require('../models/application.model');

const submitForm=async(req,res)=>{
    const {personalDetails,parentDetails,addressDetails,declaration,userRef,formId}=req.body;

    try{
        const appn=await ApplicationModel.create({
        personalDetails:personalDetails,
        parentDetails:parentDetails,
        addressDetails:addressDetails,
        declaration:declaration,
        userRef:userRef,
        formId:formId,
    });
    res.status(200).json(appn);
    }
    catch(e){
        res.status(500).json('Error in submitting the form');
    }
} 

const GetInProgressForms=async(req,res)=>{
    const id=req.params.id;
    try{
        const appns=await ApplicationModel.find({
            userRef:id,
            status:"pending",
        })
        res.status(200).json(appns);
    }
    catch(e){
        res.status(500).json('SOMETHING WENT WRONG');
    }
}

module.exports={submitForm,GetInProgressForms}