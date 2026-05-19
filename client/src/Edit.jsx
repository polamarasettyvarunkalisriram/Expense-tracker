import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ExpenseContext } from "./context/Expensecontext";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { editTransaction } = useContext(ExpenseContext);

    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        const fetchOne = async () => {
            const res = await axios.get("http://localhost:9500/list");

            const item = res.data.data.find(t => t.trans_id == id);

            if (item) {
                setAmount(item.amount);
                setDescription(item.description);
                setType(item.type);
            }
        };

        fetchOne();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        await editTransaction(id, {
            amount,
            description,
            type
        });

        navigate("/home");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: "500px" }}>
                <h3 className="text-center">Edit Transaction</h3>

                <form onSubmit={handleUpdate}>
                    <input
                        className="form-control my-2"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount"
                    />

                    <input
                        className="form-control my-2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    />

                    <div className="my-2">
                        <label>
                            <input
                                type="radio"
                                value="income"
                                checked={type === "income"}
                                onChange={(e) => setType(e.target.value)}
                            /> Income
                        </label>

                        <label className="ms-3">
                            <input
                                type="radio"
                                value="expense"
                                checked={type === "expense"}
                                onChange={(e) => setType(e.target.value)}
                            /> Expense
                        </label>
                    </div>

                    <button className="btn btn-primary w-100">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Edit;