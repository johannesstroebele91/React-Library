import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/ExpensesDisplay/Expenses/Expenses";
import expenses from "./mock-data";
 
const App = () =>{

  return (
    <div>
      <h1 style={{textAlign: 'center', color: 'white'}}>Expense Tracker</h1>
      <NewExpense/>
      <Expenses expenses={expenses}/>
    </div>
  );
}
export default App;
