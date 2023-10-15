import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

import { useState } from "react";

const ExpenseItem = (expenseItemList) => {
  const [expenseCost, setExpenseCost] = useState(expenseItemList.amount);
  const deteleExpense = (event) => {
    console.log(event);
  };

  const expenseAmountHandler = () => {
    setExpenseCost(100);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenseItemList.date} />
        <ExpenseDetails
          title={expenseItemList.title}
          locationOfExpenditure={expenseItemList.locationOfExpenditure}
          amount={expenseCost}
        />
        <button onClick={expenseAmountHandler}>Change Amout</button>
        <button onClick={deteleExpense}>Delete</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
