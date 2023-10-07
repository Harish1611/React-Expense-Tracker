import "./ExpenseItem.css";

function ExpenseDetails(expenseItemDetails) {
  return (
    <div className="expense-item__description">
      <h2> {expenseItemDetails.name}</h2>
      <h2> {expenseItemDetails.locationOfExpenditure}</h2>
      <div className="expense-item__price">${expenseItemDetails.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
