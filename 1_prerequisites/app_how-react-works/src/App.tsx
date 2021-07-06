import { useCallback, useState } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  // !!! 3 Steps to use useCallback hock for preventing comp re-rendering of reference types (e.g. functions
  // For every state change, the entire component is re-executed
  // although just content in the child (DemoOutput) has changed
  console.log("app running");

  // 1) tell React that this function will never change (why? we have to know!)
  // 2) Specify the dependencies similar to the useEffect hook
  // function like setShowParagraph do not need to be state
  // because they are saved already by React in memory
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph); // cleaner way to use prevState
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
    </div>
  );
}

export default App;
