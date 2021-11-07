import "./ExpenseItem.css";

function ExpenseAmount(props) {
  const amount = props.amount.toLocaleString("no-No", {
    style: "currency",
    currency: "NOK",
  });

  return (
    <div cy-data-selector="expenseAmount" className="expense-item__price">
      {amount}
    </div>
  );
}

export default ExpenseAmount;
