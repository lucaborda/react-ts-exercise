import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import imageGoal from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      <Header image={{ src: imageGoal, alt: "A list of goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <CourseGoal
        title="Learn React + TS"
        description="Learn it from the ground up"
      />
    </main>
  );
}
