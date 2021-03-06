import { Typography } from '@core-components';
import { useStore } from '@src/store';
import clsx from 'clsx';
import React, { FC, useEffect, useRef } from 'react';

const Timer: FC = () => {
  const progress = useStore((state) => state.progress);
  const isRunning = useStore((state) => state.isRunning);
  const isPaused = useStore((state) => state.isPaused);
  const selectedColor = useStore((state) => state.selectedColor);
  const selectedOption = useStore((state) => state.selectedOption);
  const timerSettings = useStore((state) => state.timerSettings);

  const updateProgress = useStore((state) => state.tickProgress);
  const setIsPaused = useStore((state) => state.setIsPaused);
  const setIsRunning = useStore((state) => state.setIsRunning);
  const restart = useStore((state) => state.restart);

  const timeout = useRef<NodeJS.Timeout | null>(null);

  const duration = timerSettings[selectedOption] * 60;

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

  const onClick = () => {
    if (isRunning) {
      if (duration > progress) {
        onPause();
      } else {
        onRestart();
      }
    } else {
      if (isPaused) {
        onResume();
      } else {
        onStart();
      }
    }
  };

  let buttonText;

  if (isRunning) {
    if (duration > progress) {
      buttonText = 'PAUSE';
    } else {
      buttonText = 'RESTART';
    }
  } else {
    if (isPaused) {
      buttonText = 'RESUME';
    } else {
      buttonText = 'START';
    }
  }

  let textColor;
  let hoverColor;

  switch (selectedColor) {
    case 'blue':
      textColor = 'text-blue';
      hoverColor = 'hover:text-blue';
      break;

    case 'pink':
      textColor = 'text-pink';
      hoverColor = 'hover:text-pink';
      break;

    case 'red':
      textColor = 'text-red';
      hoverColor = 'hover:text-red';
      break;
  }

  const button = (
    <button onClick={onClick} className='w-full'>
      <Typography
        align='center'
        className={`-mr-3 transition-color duration-200 ${hoverColor}`}
        variant='H3'
      >
        {buttonText}
      </Typography>
    </button>
  );

  const getTimeInMinutes = (seconds: number): string => {
    const remainingSeconds = seconds % 60;
    const remainingMinutes = Math.floor(seconds / 60);

    return `${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div
      className={`clock-container w-[300px] h-[300px] tablet:w-[410px] tablet:h-[410px]  rounded-full my-auto relative ${textColor}`}
    >
      <div className='absolute w-9/10 h-9/10 bg-bg-dark rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <svg
          className='w-full h-full transition-colors duration-150'
          viewBox='0 0 100 100'
        >
          <circle
            style={{
              strokeDasharray: 2 * 3.142 * 47,
              strokeDashoffset: (progress / duration) * 2 * 3.142 * 47,
            }}
            cx='50'
            cy='50'
            r='47'
            fill='none'
            strokeWidth='3'
            strokeLinecap='round'
            className='stroke-current transform origin-center -rotate-90 transition-stroke'
          />
        </svg>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Typography
            className={clsx({
              'animate-blink': isPaused,
            })}
            variant='H1'
          >
            {getTimeInMinutes(duration - progress)}
          </Typography>
          <div className='absolute flex flex-col items-center top-full left-1/2 transform -translate-x-1/2'>
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
