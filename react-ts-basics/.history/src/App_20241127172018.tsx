import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import imageGoal from "./assets/goals.jpg";
import { useState } from "react";

export default function App() {
  const [goal, setGoal] = useState([]);

  const handleAddGoal = () => {
    setGoal([]);
  };

  return (
    <main>
      <Header image={{ src: imageGoal, alt: "A list of goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal
        title="Learn React + TS"
        description="Learn it from the ground up"
      />
    </main>
  );
}
