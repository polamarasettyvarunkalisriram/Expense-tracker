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
    origin: [
        "https://expense-tracker-ecru-five-ru65gjt19j.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

//api 
app.use('/',routertransaction);


const PORT=9500 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})