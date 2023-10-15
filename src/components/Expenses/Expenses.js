import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const ExpenseItems = props.items;
  return (
    <Card className="expenses">
      {ExpenseItems.map((item, index) => (
        <ExpenseItem
          name={item.name}
          amount={item.cost}
          locationOfExpenditure={item.locationOfExpenditure}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
