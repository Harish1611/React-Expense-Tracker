import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./components/Expenses/ExpenseItem.css";
import { useState } from "react";

const ExpItems = [
  {
    title: "Food",
    amount: 2000,
    locationOfExpenditure: "Personal",
    date: new Date(2020, 4, 22),
  },
  {
    title: "Bills",
    amount: 12000,
    locationOfExpenditure: "Business",
    date: new Date(2021, 2, 22),
  },
  {
    title: "College Fee",
    amount: 60000,
    locationOfExpenditure: "Education",
    date: new Date(2022, 5, 20),
  },
  {
    title: "Family Trip",
    amount: 20000,
    locationOfExpenditure: "Travel",
    date: new Date(2021, 4, 21),
  },
  {
    title: "Business Trip",
    amount: 40000,
    locationOfExpenditure: "Travel",
    date: new Date(2019, 4, 21),
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
