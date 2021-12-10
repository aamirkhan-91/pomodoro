export type ControlOption = 'pomodoro' | 'short_break' | 'long_break';
export type TimerSettings = {
  [key in ControlOption]: number;
};
