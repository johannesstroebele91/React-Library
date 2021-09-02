import BasicForm from "./components/BasicForm";
import SimpleInput from "./components/SimpleInput";

function App() {
  return (
    <>
      <div className="app">
        <SimpleInput />
      </div>

      <div className="app">
        <BasicForm />
      </div>
    </>
  );
}

export default App;
