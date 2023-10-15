import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
const Expenses = (props) => {
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

      {props.items.map((item, index) => (
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
