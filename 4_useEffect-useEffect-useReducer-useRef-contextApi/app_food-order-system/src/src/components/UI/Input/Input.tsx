import classes from "./Input.module.css";

interface InputProps {
  input: any;
  label: string;
}
const Input: React.FC<InputProps> = ({ label, input, ...props }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};
export default Input;
