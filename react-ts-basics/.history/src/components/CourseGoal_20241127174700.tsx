import { FC } from "react";

type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
  onDelete: (id: number) => void;
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

const CourseGoal: FC<CourseGoalProps> = ({
  title,
  description,
  id,
  onDelete,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </article>
  );
};

export default CourseGoal;
