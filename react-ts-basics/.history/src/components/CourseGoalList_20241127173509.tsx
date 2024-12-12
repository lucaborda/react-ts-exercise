import CourseGoal from "./CourseGoal.tsx";

type CourseGoalListProps = {
  goals: {
    title: string;
    description: string;
    id: number;
  }[];
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
