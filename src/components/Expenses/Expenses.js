import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState, useEffect } from "react";
import ExpensesFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [expenseItems, setExpenseItems] = useState(props.items);
  useEffect(() => {
    setExpenseItems(props.items);
  }, [props.items]);

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {expenseItems.map((item, index) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          locationOfExpenditure={item.locationOfExpenditure}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
