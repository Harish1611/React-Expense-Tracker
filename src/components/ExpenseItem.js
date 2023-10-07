import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(expenseItemList) {
  return (
    <div className="expense-item">
      <ExpenseDate date={expenseItemList.date} />
      <ExpenseDetails
        name={expenseItemList.name}
        locationOfExpenditure={expenseItemList.locationOfExpenditure}
        amount={expenseItemList.amount}
      />
    </div>
  );
}

export default ExpenseItem;
