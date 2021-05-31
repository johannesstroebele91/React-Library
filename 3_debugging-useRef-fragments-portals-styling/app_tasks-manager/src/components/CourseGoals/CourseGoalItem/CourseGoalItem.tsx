import { CourseGoal } from "../../../types";
import "./CourseGoalItem.css";

interface CourseGoalItemProps {
  goal: CourseGoal;
  onDelete: (goalId: string) => void;
}

const CourseGoalItem: React.FC<CourseGoalItemProps> = ({ goal, onDelete }) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(goal.id);
  };

  return (
    <li
      className="goal-item"
      onClick={deleteHandler}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <span>{goal.text}</span>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default CourseGoalItem;
