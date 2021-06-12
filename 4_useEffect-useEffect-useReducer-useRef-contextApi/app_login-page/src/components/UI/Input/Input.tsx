import classes from "./Input.module.css";
import React, { useRef, useImperativeHandle } from "react";

interface InputProps {
  label: string;
  inputState: any;
  changeHandler: any;
  validationHandler: any;
}

interface RefProps {
  focus: () => void;
}

// 4) forwardRef wraps the component function as with React.FC
// AND binds this component to a ref
const Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<RefProps>) => {
    // !!! Approach for useImperativeHandle
    // Similar to useRef but gives control over the return value and replace native functions

    // 1) Declare ref
    const inputRef = useRef<HTMLInputElement>(null);

    // 2) create function that should active in case of sth.
    // The function should be callable from the outside
    // so the focus activates if
    const activate = () => {
      inputRef.current?.focus();
    };

    // 3) useImperativeHandle enables to expose the previously defined native function by:
    // a) specifying the reference to be set from outside
    // b) specifying the translation obj between child and the parent component
    // c) Optional input parameters
    useImperativeHandle(ref, () => {
      return { focus: activate };
    });

    return (
      <div
        className={`${classes.control} ${
          props.inputState.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.label}>
          {props.label.charAt(0).toUpperCase() + props.label.slice(1)}
        </label>
        <input
          ref={inputRef}
          type={props.label}
          id={props.label}
          value={props.inputState.value}
          onChange={props.changeHandler}
          onBlur={props.validationHandler}
        />
      </div>
    );
  }
);

export default Input;
