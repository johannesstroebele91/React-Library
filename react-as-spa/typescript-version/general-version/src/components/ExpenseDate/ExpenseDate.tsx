import './ExpenseDate.css';

interface ExpenseDateProps {
  expenseDate: Date;
}

const ExpenseDate: React.FC<ExpenseDateProps> = ({ expenseDate }) => {
  
  // !!! Better to oursource code from the HTML by
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { month: "2-digit" });
  const year = expenseDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
