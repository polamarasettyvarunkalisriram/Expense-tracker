const transactionmodel=require('../model/transactionModel');

const gettransactionlist=async (req,res)=>{
    try{
        const result=await transactionmodel.gettransaction();
        return res.status(200).json({status:1,data:result});
    }
    catch(err){
        return res.status(404).json({message:err,status:0})
    }
}

const addtransaction=async (req,res)=>{
    try{
        const {amount,description,type}=req.body;
        if(!amount || !description ||!type){
            return res.status(400).json({message:'All fields required',status:0})
        }
        const result=await transactionmodel.transactioncreate(amount,description,type);
        return res.status(201).json({message:'transaction added sucessfully',status:1,data:result});
    }
    catch(err){
        return res.status(500).json({message:err,status:0});
    }
}

const updatetransactionlist=async (req,res)=>{
    try{
        const {id}=req.params;
         const { amount, description, type } = req.body;
              if (!amount || !description || !type) {
            return res.status(400).json({
                message: "All fields required",
                status: 0
            });
        }
        const result=await transactionmodel.updatetransaction(amount,description,type,id);
        return res.status(200).json({message:'Transaction updated successfully',status:1})
    }
      catch(err){
        return res.status(500).json({message:err,status:0});
    }
}

const deletetransactionlist=async (req,res)=>{
    try{
        const {id}=req.params;
        const result=await transactionmodel.deletetransaction(id);
        return res.status(200).json({status:1,  message: "Deleted successfully",data:result});
    }
    catch(err){
        return res.status(404).json({message:err,status:0})
    }
}
module.exports={addtransaction,gettransactionlist,updatetransactionlist,deletetransactionlist}