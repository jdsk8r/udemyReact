import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";
import React from "react";

function ExpenseItem(props) {
  return (
    <li cy-data-selector="expense-item">
      <Card className="expense-item" >
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 cy-data-selector="expenseDescription">{props.title}</h2>
          <ExpenseAmount amount={props.amount} />
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
