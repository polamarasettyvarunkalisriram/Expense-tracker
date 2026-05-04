const {db}=require('../config/db');


const gettransaction=async ()=>{
    try{
        const sql='select * from transactions';
        const [rows]=await db.execute(sql);
        return rows;
    }
    catch(err){
        throw err;
    }
}

const transactioncreate=async (amount,description,type)=>{
    try{
        const sql='insert into transactions(amount,description,type) values (?,?,?)';
        const [rows]=await db.execute(sql,[amount,description,type]);
        return rows;
    }
    catch(err){
        throw err;
    }
}

const updatetransaction=async (amount,description,type,id)=>{
    try{
        const sql='update transactions set amount=?,description=?,type=? where trans_id=?'
        const [rows]=await db.execute(sql,[amount,description,type,id]);
        return rows;
    }
     catch(err){
        throw err;
    }
}


const deletetransaction=async (id)=>{
    try{
        const sql='delete from transactions where trans_id=?';
        const [rows]=await db.execute(sql,[id]);
        return rows;
    }
     catch(err){
        throw err;
    }
}
module.exports={gettransaction,transactioncreate,deletetransaction,updatetransaction}