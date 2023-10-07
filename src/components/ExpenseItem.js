import "./ExpenseItem.css";

function ExpenseItem(expenseItemList) {
  console.log(expenseItemList);

  return (
    <div className="expense-item">
      <div>
        <h2> {expenseItemList.name}</h2>
      </div>
      <div className="expense-item__description">
        <h2> {expenseItemList.date.toISOString()}</h2>
        <h2> {expenseItemList.locationOfExpenditure}</h2>
        <div className="expense-item__price">${expenseItemList.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
