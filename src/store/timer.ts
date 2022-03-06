import { TimerSlice } from '@src/types/timer';

import { StoreSlice } from './';

export const createTimerSlice: StoreSlice<TimerSlice> = (set) => ({
  selectedOption: 'pomodoro',
  progress: 0,
  isRunning: false,
  isPaused: false,
  timerSettings: {
    pomodoro: 25,
    short_break: 5,
    long_break: 15,
  },
  setSelectedOption: (selectedOption) =>
    set({
      selectedOption,
      isPaused: false,
      isRunning: false,
      progress: 0,
    }),
  setTimerSettings: (timerSettings) =>
    set({
      isPaused: false,
      isRunning: false,
      progress: 0,
      timerSettings,
    }),
  setIsRunning: (isRunning) =>
    set({
      isRunning,
    }),
  setIsPaused: (isPaused) =>
    set({
      isPaused,
    }),
  tickProgress: () =>
    set((state) => ({
      progress: state.progress + 1,
    })),
  restart: () =>
    set({
      progress: 0,
      isRunning: true,
      isPaused: false,
    }),
});
