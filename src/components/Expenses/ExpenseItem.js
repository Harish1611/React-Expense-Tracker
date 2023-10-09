import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (expenseItemList) => {
  const deteleExpense = (event) => {
    console.log(event);
  };
  const clickhandler = () => {
    console.log("clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseItemList.date} />
      <ExpenseDetails
        name={expenseItemList.name}
        locationOfExpenditure={expenseItemList.locationOfExpenditure}
        amount={expenseItemList.amount}
      />
      <button onClick={clickhandler}>Change Title</button>

      <button onClick={deteleExpense}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
