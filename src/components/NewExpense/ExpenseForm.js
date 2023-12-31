import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log(e.target.value);
  };

  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);

    console.log(e.target.value);
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);

    console.log(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const dataSubmitted = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(dataSubmitted);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const toggleVisibilty = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {!isVisible ? (
        <button onClick={toggleVisibilty}> Add New Expense </button>
      ) : (
        <form onSubmit={formSubmitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" value={enteredTitle} onChange={titleHandler} />
            </div>

            <div className="new-expense__control">
              <label>Amout</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountHandler}
              />
            </div>

            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateHandler}
              />
            </div>
            <div>
              <button onClick={toggleVisibilty}>Cancel</button>
            </div>
            <div className="new-expense__actions">
              <button type="submit">Add Expense</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
