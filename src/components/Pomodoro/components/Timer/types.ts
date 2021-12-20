export type TimerProps = {
  duration: number;
  onStart: () => void;
  onPause: () => void;
  onRestart: () => void;
  onResume: () => void;
};
