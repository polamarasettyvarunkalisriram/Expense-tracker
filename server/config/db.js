const mysql=require('mysql2/promise');

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    port:3306,
    password:'123456',
    database:'expense_db'
})

const connection =async ()=>{
    try{
        const getconnect=await db.getConnection();
        console.log('database connected')
    }
    catch(err){
        console.log('database error',err);
    }
}

module.exports={db,connection};