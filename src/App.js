import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Chocolate",
      amount: 239.63,
      date: new Date(2021, 10, 31),
    },
    { id: "e2", title: "Milk", amount: 23.45, date: new Date(2021, 10, 28) },
    {
      id: "e3",
      title: "Deodorant",
      amount: 25.12,
      date: new Date(2021, 10, 30),
    },
    {
      id: "e4",
      title: "Shoes",
      amount: 500.12,
      date: new Date(2021, 11, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
        <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
