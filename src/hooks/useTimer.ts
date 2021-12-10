import { ControlOption, TimerSettings } from '@src/types/timer';
import { TIMER_ACTIONS, TimerContext } from '@state/timer';
import { useCallback, useContext } from 'react';

export const useTimer = (): {
  selectedOption: ControlOption;
  isPaused: boolean;
  isRunning: boolean;
  timerSettings: TimerSettings;
  progress: number;
  restart: () => void;
  updateProgress: () => void;
  setTimerSettings: (payload: TimerSettings) => void;
  setIsPaused: (payload: boolean) => void;
  setIsRunning: (payload: boolean) => void;
  setSelectedOption: (payload: ControlOption) => void;
} => {
  const { state, dispatch } = useContext(TimerContext);

  const { timerSettings, isPaused, isRunning, selectedOption, progress } =
    state;

  const setTimerSettings = useCallback(
    (payload: TimerSettings) => {
      dispatch({
        type: TIMER_ACTIONS.SET_TIMER_SETTINGS,
        payload,
      });
    },
    [dispatch]
  );

  const setIsPaused = useCallback(
    (payload: boolean) => {
      dispatch({
        type: TIMER_ACTIONS.SET_PAUSED,
        payload,
      });
    },
    [dispatch]
  );

  const setIsRunning = useCallback(
    (payload: boolean) => {
      dispatch({
        type: TIMER_ACTIONS.SET_RUNNING,
        payload,
      });
    },
    [dispatch]
  );

  const setSelectedOption = useCallback(
    (payload: ControlOption) => {
      dispatch({
        type: TIMER_ACTIONS.SET_OPTION,
        payload,
      });
    },
    [dispatch]
  );

  const updateProgress = useCallback(() => {
    dispatch({
      type: TIMER_ACTIONS.UPDATE_PROGRES,
    });
  }, [dispatch]);

  const restart = useCallback(() => {
    dispatch({
      type: TIMER_ACTIONS.RESTART,
    });
  }, [dispatch]);

  return {
    selectedOption,
    progress,
    isPaused,
    isRunning,
    timerSettings,
    restart,
    updateProgress,
    setTimerSettings,
    setIsPaused,
    setIsRunning,
    setSelectedOption,
  };
};
