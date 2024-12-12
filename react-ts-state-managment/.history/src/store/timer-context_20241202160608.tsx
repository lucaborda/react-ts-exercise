import { createContext, ReactNode } from "react";

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

export const TimersContext = createContext<TimersContextValue | null>(null);

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
