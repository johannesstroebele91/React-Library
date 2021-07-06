import React from "react";
import MyParagraph from "./MyParagraph";

interface DemoOutputProps {
  show: boolean;
}

const DemoOutput: React.FC<DemoOutputProps> = ({ show }) => {
  console.log("demo output running");
  return <MyParagraph>{show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
c;
