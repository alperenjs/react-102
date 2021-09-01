import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChange = (event) => {
        setEnteredTitle(event.target.value)
    };

    const amountChange = (event) => {
        setEnteredAmount(event.target.value)

    };
    const dateChange = (event) => {
        setEnteredDate(event.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        // child to parent communication > ExpenseForm.js to NewExpense.js 

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChange} />

                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChange} value={enteredAmount} type="number" min="0.01" step="0.01" />

                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChange} value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" />

                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expanse</button>
            </div>
        </form>

    )
}

export default ExpenseForm
