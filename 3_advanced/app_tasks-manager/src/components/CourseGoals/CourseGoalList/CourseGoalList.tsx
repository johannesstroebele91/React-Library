import { CourseGoal } from "../../../types";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

interface CourseGoalListProps {
  goals: CourseGoal[];
  onDeleteItem: (goalId: string) => void;
}
const CourseGoalList: React.FC<CourseGoalListProps> = ({
  goals,
  onDeleteItem,
}) => {
  return (
    <ul className="goal-list">
      {goals.map((goal: CourseGoal) => (
        <CourseGoalItem
          key={goal.id}
          goal={goal}
          onDelete={onDeleteItem}
        ></CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
