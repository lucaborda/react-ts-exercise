import Button from "./UI/Button.tsx";
import { useTimerContext } from "../store/timer-context.tsx";

export default function Header() {
  const timersContext = useTimerContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timersContext.isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
}
