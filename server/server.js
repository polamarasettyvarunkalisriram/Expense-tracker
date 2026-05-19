const express=require('express');
const dotenv=require('dotenv');
dotenv.config();

const cors=require('cors');
const {connection}=require('./config/db');
const routertransaction=require('./Router/transactionroute');

connection();
const app=express();
app.use(express.json()); 
app.use(cors());

//api 
app.use('/',routertransaction);


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})