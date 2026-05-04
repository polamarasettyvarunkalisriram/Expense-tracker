const transactioncontroller=require('../controller/transactioncontroller');
const express=require('express');
const router=express.Router();

router.get('/list',transactioncontroller.gettransactionlist)
router.post('/add',transactioncontroller.addtransaction);
router.put('/update/:id',transactioncontroller.updatetransactionlist);
router.delete('/delete/:id',transactioncontroller.deletetransactionlist);
module.exports=router;