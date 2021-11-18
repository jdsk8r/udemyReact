import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("no-No", { month: "long" });
  const day = props.date.toLocaleString("no-NO", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day" cy-data-selector="expenseDay">
        {day}
      </div>
      <div className="expense-date__month" cy-data-selector="expenseMonth">
        {month}
      </div>
      <div className="expense-date__year" cy-data-selector="expenseYear">
        {year}
      </div>
    </div>
  );
}

export default ExpenseDate;
