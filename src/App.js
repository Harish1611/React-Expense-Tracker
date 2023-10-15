import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./components/Expenses/ExpenseItem.css";
import { useState } from "react";

const ExpItems = [
  {
    title: "Food",
    amount: 2000,
    locationOfExpenditure: "Personal",
    date: new Date(20, 4, 23),
  },
  {
    title: "Bills",
    amount: 12000,
    locationOfExpenditure: "Business",
    date: new Date(15, 2, 23),
  },
  {
    title: "College Fee",
    amount: 60000,
    locationOfExpenditure: "Education",
    date: new Date(13, 5, 23),
  },
  {
    title: "Family Trip",
    amount: 20000,
    locationOfExpenditure: "Travel",
    date: new Date(16, 4, 23),
  },
];

const App = () => {
  const [expenseItemList, setEnteredItemList] = useState(ExpItems);

  const onSaveExpeseHandler = (dataSubmitted) => {
    console.log(dataSubmitted, "reached App");
    // const updatedExpenseItemList = [...expenseItemList, dataSubmitted];
    // setEnteredItemList(updatedExpenseItemList);

    setEnteredItemList((prevExpenses) => {
      return [dataSubmitted, ...expenseItemList];
    });
  };

  return (
    <div>
      <NewExpense onSaveExpense={onSaveExpeseHandler} />

      <Expenses items={expenseItemList} />
    </div>
  );
};

export default App;
