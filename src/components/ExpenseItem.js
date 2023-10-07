import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";

function ExpenseItem(expenseItemList) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseItemList.date} />
      <ExpenseDetails
        name={expenseItemList.name}
        locationOfExpenditure={expenseItemList.locationOfExpenditure}
        amount={expenseItemList.amount}
      />
    </Card>
  );
}

export default ExpenseItem;
