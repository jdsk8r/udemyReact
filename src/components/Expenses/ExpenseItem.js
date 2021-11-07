import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 cy-data-selector="expenseDescription">{props.title}</h2>
        <ExpenseAmount amount={props.amount}/>
      </div>
    </Card>
  );
}

export default ExpenseItem;
