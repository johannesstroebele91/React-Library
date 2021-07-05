import classes from "./Button.module.css";

const Button = (props: any) => {
  console.log("button running");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
console.log("app running");
