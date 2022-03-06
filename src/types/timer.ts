export type ControlOption = 'pomodoro' | 'short_break' | 'long_break';

export type TimerSettings = {
  [key in ControlOption]: number;
};

export type TimerSlice = {
  selectedOption: ControlOption;
  timerSettings: TimerSettings;
  progress: number;
  isRunning: boolean;
  isPaused: boolean;
  setSelectedOption: (selectedOption: ControlOption) => void;
  setTimerSettings: (timerSettings: TimerSettings) => void;
  setIsRunning: (isRunning: boolean) => void;
  setIsPaused: (isPaused: boolean) => void;
  tickProgress: () => void;
  restart: () => void;
};
