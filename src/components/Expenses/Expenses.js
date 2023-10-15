import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterByYear = props.items.filter((item) => {
    console.log(item);
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filterByYear} />
    </Card>
  );
};

export default Expenses;
