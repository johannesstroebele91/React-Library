import Expenses from "./components/Expenses/Expenses";
import expenses from "./mock-data";
 
function App() {

  return (
    <div>
      <h1 style={{textAlign: 'center', color: 'white'}}>Expense Tracker</h1>
      <Expenses expenses={expenses}/>
    </div>

  );
}
export default App;
