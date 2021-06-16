import classes from "./MealtemForm.module.css";
import Input from "../../../UI/Input/Input";
import { useRef, useState } from "react";

interface MealItemFormProps {
  onAddToCart: (amount: number) => void;
}

const MealItemForm: React.FC<MealItemFormProps> = ({ onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: any) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current!.value;
    const enteredAmountNumber = +enteredAmount;

    // No value was entered
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      <p>{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}</p>
    </form>
  );
};
export default MealItemForm;
