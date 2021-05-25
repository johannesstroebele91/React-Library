import "./App.css";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

// Only the App.tsx gets changed in an React app
function App() {
  return (
    <>
    <h1 style={{textAlign: 'center', color: 'white'}}>CRM System</h1>
      <AddUser />
      <UserList />
    </>
  );
}

export default App;
