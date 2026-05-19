const mysql=require('mysql2/promise');

const db=mysql.createPool({
   host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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