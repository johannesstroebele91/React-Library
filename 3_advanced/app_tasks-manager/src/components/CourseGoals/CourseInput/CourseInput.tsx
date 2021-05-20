import { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

interface onAddGoalProps {
  onAddGoal: (enteredValue: string) => void;
}

const CourseInput: React.FC<onAddGoalProps> = ({onAddGoal}) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event: any) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if(enteredValue.length === 0) {
      alert("Please insert some text before adding a goal")
    } else {
      onAddGoal(enteredValue);
      setEnteredValue(''); 
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
