import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";

function ExpenseItem(props) {

  let title = props.title;

  const clickHandler = () => {
    title = 'Updated!';
  }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 cy-data-selector="expenseDescription">{title}</h2>
        <ExpenseAmount amount={props.amount}/>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
