import { useTimer } from '@hooks/useTimer';
import { ControlOption } from '@src/types/timer';
import React, { FC, useEffect, useRef } from 'react';

import { ControlBar, Timer } from './components';

const Pomodoro: FC = () => {
  const {
    selectedOption,
    timerSettings,
    progress,
    isRunning,
    updateProgress,
    setIsPaused,
    setIsRunning,
    setSelectedOption,
    restart,
  } = useTimer();

  const timeout = useRef<NodeJS.Timeout | null>(null);

  const duration = timerSettings[selectedOption] * 60;

  const onOptionChanged = (option: ControlOption) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    setIsRunning(false);
    setIsPaused(false);
  }, [setIsPaused, setIsRunning, timerSettings]);

  useEffect(() => {
    if (isRunning) {
      timeout.current = setTimeout(() => {
        if (progress < duration) {
          updateProgress();
        }
      }, 1000);

      if (progress === duration) {
        clearTimeout(timeout.current as NodeJS.Timeout);
      }

      return () => clearTimeout(timeout.current as NodeJS.Timeout);
    }
  }, [duration, isRunning, progress, updateProgress]);

  const onStart = () => {
    setIsRunning(true);
  };

  const onPause = () => {
    setIsPaused(true);
    setIsRunning(false);
    clearTimeout(timeout.current as NodeJS.Timeout);
  };

  const onRestart = () => {
    restart();
  };

  const onResume = () => {
    setIsPaused(false);
    setIsRunning(true);
  };

  return (
    <div className="flex flex-col flex-1 justify-between items-center">
      <ControlBar
        selectedOption={selectedOption}
        onOptionChanged={onOptionChanged}
      />
      <Timer
        duration={duration}
        onStart={onStart}
        onPause={onPause}
        onRestart={onRestart}
        onResume={onResume}
      />
    </div>
  );
};

export default Pomodoro;
