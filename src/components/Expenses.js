import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses() {
  const ExpItems = [
    {
      name: "Food",
      cost: 2000,
      locationOfExpenditure: "Personal",
      date: new Date(20, 4, 23),
    },
    {
      name: "Bills",
      cost: 12000,
      locationOfExpenditure: "Business",
      date: new Date(15, 2, 23),
    },
    {
      name: "College Fee",
      cost: 60000,
      locationOfExpenditure: "Education",
      date: new Date(13, 5, 23),
    },
    {
      name: "Family Trip",
      cost: 20000,
      locationOfExpenditure: "Travel",
      date: new Date(16, 4, 23),
    },
  ];
  return (
    <Card className="expenses">
      {ExpItems.map((item, index) => (
        <ExpenseItem
          name={item.name}
          amount={item.cost}
          locationOfExpenditure={item.locationOfExpenditure}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
