import { useState } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

// Only the App.tsx gets changed in an React app
function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  // For every state change, the entire component is re-executed
  console.log("app running");
  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph); // cleaner way to use prevState
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
    </div>
  );
}

export default App;
