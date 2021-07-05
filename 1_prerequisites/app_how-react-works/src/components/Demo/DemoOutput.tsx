interface DemoOutputProps {
  show: boolean;
}

const DemoOutput: React.FC<DemoOutputProps> = ({ show }) => {
  return <p>{show ? "This is new!" : ""}</p>;
};

export default DemoOutput;
