import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";
import { ReactNode } from "react";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  let warningBox: ReactNode;
  const goalsAmount = goals.length;

  if (goalsAmount === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goal yet. Start adding some!
      </InfoBox>
    );
  }

  if (goalsAmount >= 4) {
    return (
      <InfoBox mode="warning" severity={goalsAmount > 5 ? "high" : "medium"}>
        You are collecting a lot of goals. Don't put too much on your plate.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
