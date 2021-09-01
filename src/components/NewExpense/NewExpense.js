import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props)  => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);

        props.onAddExpense(expenseData);
        // child to parent communication > NewExpense.js to App.js
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
        // child to parent communication > ExpenseForm.js to NewExpense.js
    )
}

export default NewExpense
