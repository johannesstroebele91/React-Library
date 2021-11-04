import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see you</p>}
      {changedText && <p>Changed!</p>}
      <button onCLick={changeTextHandler}>Change Text!</button>
    </>
  );
};

export default Greeting;
