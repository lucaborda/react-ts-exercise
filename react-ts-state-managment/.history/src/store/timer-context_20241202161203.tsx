import { createContext, ReactNode, useContext } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimerContext() {
  const timerContext = useContext(TimersContext);

  if (timerContext === null) {
    throw new Error("Somthing went wrong!");
  }

  return timerContext;
}

type TimerContexProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimerContexProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer() {},
    startTimer() {},
    stopTimer() {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
