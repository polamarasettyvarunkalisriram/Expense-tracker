import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {ExpenseContext} from './context/Expensecontext';
const Add = () => {
    const navigate = useNavigate();
    const {addTransaction } = useContext(ExpenseContext);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("expense");
    const submithandle = async (e) => {
          e.preventDefault();
        const newTransaction = {
            amount,
            description,
            type
        };
        await addTransaction(newTransaction);
        navigate('/home')

    }
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4" style={{ width: "500px" }}>
                <h3 className="text-center mb-3">Add Transaction</h3>
                <form onSubmit={submithandle}>
                    <div className="px-1">
                        <div className="mb-3">
                            <label className="form-label">Amount</label>
                            <input
                                type="number"
                                placeholder="Enter amount" 
                                className="form-control shadow-sm"
                                style={{ borderRadius: '20px' }}
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input
                                type="text"
                                placeholder="Enter description"
                                className="form-control shadow-sm"
                                style={{ borderRadius: '20px' }}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block">Type</label>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="type" value="expense" checked={type === "expense"}
                            onChange={(e) => setType(e.target.value)} className="form-check-input" />
                                <label className="form-check-label">Expense</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="type" value="income" checked={type === "income"}  onChange={(e) => setType(e.target.value)} className="form-check-input" />
                                <label className="form-check-label">Income</label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3  gap-3">
                        <button type="button" className="btn btn-outline-secondary px-4"
                            onClick={() => navigate('/home')}>Cancel
                        </button>
                        <button type="submit" className="btn btn-primary px-4">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add