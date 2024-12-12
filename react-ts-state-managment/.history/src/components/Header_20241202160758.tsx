import { useContext } from "react";
import Button from "./UI/Button.tsx";
import { TimersContext } from "../store/timer-context.tsx";

export default function Header() {
  const timersContext = useContext(TimersContext);

  if (timersContext === null) {
    throw new Error("Somthing went wrong!");
  }

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>Stop Timers</Button>
    </header>
  );
}
