import "./App.css";
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";

// Only the App.tsx gets changed in an React app
function App() {
  return (
    <>
    <h1 style={{textAlign: 'center', color: 'white'}}>CRM System</h1>
      <AddUser />
      <UsersList />
    </>
  );
}

export default App;
