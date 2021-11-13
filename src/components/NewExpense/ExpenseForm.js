import React from "react";
import './ExpenseForm.css';

function ExpenseForm() {
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
             <label aria-label="title">Title</label>
             <input type="text" cy-data-selector="new-expense-title"/>
            </div>
            <div className="new-expense__control">
             <label aria-label="amount">Amount</label>
             <input type="number" min="0.01" step="0.01" cy-data-selector="new-expense-amount"/>
            </div>
            <div className="new-expense__control">
             <label aria-label="date">Date</label>
             <input type="date" min="2021-01-01" max="2023-12-31" cy-data-selector="new-expense-date"/>
            </div>                        
        </div>
        <div className="new-expense__actions">
            <button type="submit" cy-data-selector="add-new-expense">Add expense</button>
        </div>
    </form>
}

export default ExpenseForm;