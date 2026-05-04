import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {ExpenseContext} from './context/Expensecontext';
import axios from 'axios';
import "./Home.css";
const Home = () => {
    const navigate=useNavigate();
    const { income, expense, balance,deleteTransaction,editTransaction } = useContext(ExpenseContext);
    const [Transaction,setTransaction]=useState([])
    const [search,setsearch]=useState("");
 const getTransaction = async () => {
        try {
            const res = await axios.get('http://localhost:9500/list');

            if (res.data.status === 1) {
                setTransaction(res.data.data); 
            }
        } catch (err) {
            console.log(err);
        }
    };
    const filteredTransactions = Transaction.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
);
    useEffect(()=>{getTransaction()},[])
    return (
     <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light border-1">

    <div className="dashboard">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">

            <div>
                <h4 className="fw-bold mb-0">Expense Tracker</h4>
                <small className="text-muted">Track your money smartly</small>
            </div>

            <button
                className="btn btn-dark rounded-pill px-4"
                onClick={() => navigate('/add')}
            >
                + Add
            </button>

        </div>

        {/* BALANCE CARD */}
        <div className="balance-glass mb-4">
            <small>Total Balance</small>
            <h2 className="fw-bold mt-1">₹{balance}</h2>
        </div>

        {/* STATS */}
        <div className="stats">

            <div className="stat income">
                <span>Income</span>
                <h5>₹{income}</h5>
            </div>

            <div className="stat expense">
                <span>Expense</span>
                <h5>₹{expense}</h5>
            </div>

        </div>

        {/* SEARCH */}
        <input
            type="search"
            placeholder="Search transactions..."
            className="search"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
        />

        {/* LIST */}
        <div className="list">

            {filteredTransactions?.length > 0 ? (
                filteredTransactions.map((item, index) => (
                    <div key={index} className="item">

                        <div>
                            <p className="mb-0 fw-semibold">{item.description}</p>
                        </div>

                        <span className={`amount ${item.type}`}>
                            ₹{item.amount}
                        </span>

                        <div className="actions">

                            <button
                                onClick={() => navigate(`/edit/${item.trans_id}`)}
                            >
                                <i className="bi bi-pencil"></i>
                            </button>

                            <button
                                onClick={() => deleteTransaction(item.trans_id)}
                            >
                                <i className="bi bi-trash"></i>
                            </button>

                        </div>

                    </div>
                ))
            ) : (
                <p className="text-center text-muted mt-3">
                    No transactions found
                </p>
            )}

        </div>

    </div>
</div>
    )
}

export default Home