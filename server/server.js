const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const {connection}=require('./config/db');
const routertransaction=require('./Router/transactionroute');
connection();
const app=express();
dotenv.config();
app.use(express.json()); 
app.use(cors({
    origin: "https://your-vercel-app.vercel.app"
}));

//api 
app.use('/',routertransaction);


const PORT=9500 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})