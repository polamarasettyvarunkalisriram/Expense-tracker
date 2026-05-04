import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ExpenseContext = createContext();

const API = "https://your-backend.onrender.com";

const Expensecontext = ({ children }) => {
    const [Transaction, setTransaction] = useState([]);

    const getTransaction = async () => {
        const res = await axios.get(`${API}/list`);

        if (res.data.status === 1) {
            setTransaction(res.data.data);
        }
    };

    const addTransaction = async (data) => {
        const res = await axios.post(`${API}/add`, data);

        if (res.data.status === 1) {
            getTransaction();
        }
    };

    const deleteTransaction = async (id) => {
        const res = await axios.delete(`${API}/delete/${id}`);

        if (res.data.status === 1) {
            getTransaction();
        }
    };

    const editTransaction = async (id, updatedData) => {
        const result = await axios.put(`${API}/update/${id}`, updatedData);

        if (result.data.status === 1) {
            getTransaction();
        }
    };

    useEffect(() => {
        getTransaction();
    }, []);

    const income = Transaction
        .filter(i => i.type === "income")
        .reduce((acc, i) => acc + Number(i.amount), 0);

    const expense = Transaction
        .filter(i => i.type === "expense")
        .reduce((acc, i) => acc + Number(i.amount), 0);

    const balance = income - expense;

    return (
        <ExpenseContext.Provider value={{
            Transaction,
            addTransaction,
            deleteTransaction,
            editTransaction,
            income,
            expense,
            balance
        }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export default Expensecontext;