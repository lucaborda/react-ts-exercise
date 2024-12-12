import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CourseGoalType } from "../App.tsx";

type CourseGoalListProps = {
  goals: CourseGoalType[];
};

const CourseGoalList = ({ goals }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li>
          <CourseGoal title={goal.title} description={goal.description} />
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
