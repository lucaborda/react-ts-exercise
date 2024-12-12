import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CourseGoalType } from "../App.tsx";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li>
          <CourseGoal
            title={goal.title}
            description={goal.description}
            onDelete={onDeleteGoal}
          />
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
