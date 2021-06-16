import React from "react";
import classes from "./Input.module.css";

interface InputProps {
  input: any;
  label: string;
}

const Input = React.forwardRef((props: InputProps, ref: any) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});
export default Input;
