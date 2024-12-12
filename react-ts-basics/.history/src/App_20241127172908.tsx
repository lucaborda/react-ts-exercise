import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import imageGoal from "./assets/goals.jpg";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth",
      };

      return [...prevGoals, newGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: imageGoal, alt: "A list of goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      {goals.map((goal) => (
        <li>
          <CourseGoal title={goal.title} description={goal.description} />
        </li>
      ))}
    </main>
  );
}
