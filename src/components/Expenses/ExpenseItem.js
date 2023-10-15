import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

import { useState } from "react";

const ExpenseItem = (expenseItemList) => {
  const [title, setTitle] = useState(expenseItemList.name); //React hook

  const [expenseCost, setExpenseCost] = useState(expenseItemList.amount);
  const deteleExpense = (event) => {
    console.log(event);
  };
  const clickhandler = () => {
    setTitle("Updated"); // calling and passing the new value
    console.log("clicked");
  };
  const expenseAmountHandler = () => {
    setExpenseCost(100);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseItemList.date} />
      <ExpenseDetails
        name={title}
        locationOfExpenditure={expenseItemList.locationOfExpenditure}
        amount={expenseCost}
      />
      <button onClick={expenseAmountHandler}>Change Amout</button>
      <button onClick={clickhandler}>Change Title</button>
      <button onClick={deteleExpense}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
