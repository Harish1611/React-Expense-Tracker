import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState, useEffect } from "react";
const Expenses = (props) => {
  const [expenseItems, setExpenseItems] = useState(props.items);
  useEffect(() => {
    setExpenseItems(props.items);
  }, [props.items]);
  console.log(expenseItems, props.items);
  return (
    <Card className="expenses">
      {expenseItems.map((item, index) => (
        <ExpenseItem
          name={item.title}
          amount={item.amount}
          locationOfExpenditure={item.locationOfExpenditure}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
