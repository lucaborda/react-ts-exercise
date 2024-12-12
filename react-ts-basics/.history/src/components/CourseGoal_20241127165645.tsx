import { FC } from "react";

type CourseGoalProps = {
  title: string;
  description: string;
};

/*
interface CourseGoalProps {
  title: string;
  description: string;
  children: ReactNode
}

  //////////////

type CourseGoalProps = PropsWithChildren<{title: string, description: string}>

*/

const CourseGoal: FC<CourseGoalProps> = ({ title, description }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Delete</button>
      </div>
    </article>
  );
};

export default CourseGoal;
