import classes from "./Input.module.css";

interface InputProps {
  label: string;
  inputState: any;
  changeHandler: any;
  validationHandler: any;
}

const Input: React.FC<InputProps> = ({
  label,
  inputState,
  changeHandler,
  validationHandler,
}) => {
  return (
    <div
      className={`${classes.control} ${
        inputState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={label}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <input
        type={label}
        id={label}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={validationHandler}
      />
    </div>
  );
};

export default Input;
