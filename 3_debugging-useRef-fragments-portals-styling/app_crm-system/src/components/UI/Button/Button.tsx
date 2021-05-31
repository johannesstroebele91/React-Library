import classes from "./Button.module.css";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  // onClick needs to be passed with an ? for optional
  onClick?: (event: any) => void;
}

// Any function that is passed
// onto the built in button component
// is passed through this onClick prop
const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button
      className={classes.button}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
