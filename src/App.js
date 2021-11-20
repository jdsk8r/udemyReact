import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Chocolate",
    amount: 239.63,
    date: new Date(2019, 10, 31),
  },
  { id: "e2", title: "Milk", amount: 23.45, date: new Date(2021, 10, 28) },
  {
    id: "e3",
    title: "Deodorant",
    amount: 25.12,
    date: new Date(2020, 10, 30),
  },
  {
    id: "e4",
    title: "Shoes",
    amount: 500.12,
    date: new Date(2021, 11, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
