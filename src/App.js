import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./components/Expenses/ExpenseItem.css";

const App = () => {
  const ExpItems = [
    {
      name: "Food",
      cost: 2000,
      locationOfExpenditure: "Personal",
      date: new Date(20, 4, 23),
    },
    {
      name: "Bills",
      cost: 12000,
      locationOfExpenditure: "Business",
      date: new Date(15, 2, 23),
    },
    {
      name: "College Fee",
      cost: 60000,
      locationOfExpenditure: "Education",
      date: new Date(13, 5, 23),
    },
    {
      name: "Family Trip",
      cost: 20000,
      locationOfExpenditure: "Travel",
      date: new Date(16, 4, 23),
    },
  ];

  const onSaveExpeseHandler = (dataSubmitted) => {
    console.log(dataSubmitted, "reached App");
  };

  return (
    <div>
      <NewExpense onSaveExpense={onSaveExpeseHandler} />

      <Expenses items={ExpItems} />
    </div>
  );
};

export default App;
