import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ExpenseContext = createContext();

const Expensecontext = ({ children }) => {
    const [Transaction, setTransaction] = useState([]);

const API = "https://expense-tracker-1-pop6.onrender.com/api/transactions";
    const getTransaction = async () => {
        try {
            const res = await axios.get(API);

            if (res.data.status === 1) {
                setTransaction(res.data.data);
            }
        } catch (err) {
            console.error("Error fetching transactions", err);
        }
    };

    const addTransaction = async (data) => {
        try {
            const res = await axios.post(API, data);

            if (res.data.status === 1) {
                getTransaction();
            }
        } catch (err) {
            console.error("Error adding transaction", err);
        }
    };

    const deleteTransaction = async (id) => {
        try {
            const res = await axios.delete(`${API}?id=${id}`);

            if (res.data.status === 1) {
                getTransaction();
            }
        } catch (err) {
            console.error("Error deleting transaction", err);
        }
    };

    const editTransaction = async (id, updatedData) => {
        try {
            const result = await axios.put(`${API}?id=${id}`, updatedData);

            if (result.data.status === 1) {
                getTransaction();
            }
        } catch (err) {
            console.error("Error updating transaction", err);
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