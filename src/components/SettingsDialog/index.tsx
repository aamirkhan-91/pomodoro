import { Button, NumericInput, Typography } from '@core-components';
import { useTheme } from '@hooks/useTheme';
import { useTimer } from '@hooks/useTimer';
import { CheckmarkIcon, CrossIcon, GearIcon } from '@icons';
import { ColorType, FontType } from '@src/types/theme';
import { TimerSettings } from '@src/types/timer';
import clsx from 'clsx';
import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const SettingsDialog: FC = () => {
  const isBrowser = typeof window !== 'undefined';

  const [isOpen, setIsOpen] = useState(false);
  const container = isBrowser && document.querySelector('#modal-root');

  const [locallySelectedFont, setLocallySelectedFont] =
    useState<FontType | null>(null);
  const [locallySelectedColor, setLocallySelectedColor] =
    useState<ColorType | null>(null);
  const [localTimerSettings, setLocalTimerSettings] =
    useState<TimerSettings | null>(null);

  const { selectedFont, selectedColor, setFont, setColor } = useTheme();
  const { timerSettings, setTimerSettings } = useTimer();

  useEffect(() => {
    if (selectedFont) {
      setLocallySelectedFont(selectedFont);
    }
  }, [selectedFont, isOpen]);

  useEffect(() => {
    if (selectedColor) {
      setLocallySelectedColor(selectedColor);
    }
  }, [selectedColor, isOpen]);

  useEffect(() => {
    if (timerSettings) {
      setLocalTimerSettings(timerSettings);
    }
  }, [timerSettings, isOpen]);

  const onClickApplyChanges = () => {
    if (
      localTimerSettings !== null &&
      locallySelectedColor !== null &&
      locallySelectedFont !== null &&
      setTimerSettings !== null
    ) {
      setFont(locallySelectedFont);
      setColor(locallySelectedColor);
      setTimerSettings(localTimerSettings);
    }

    setIsOpen(false);
  };

  let dialog: React.ReactPortal | null = null;

  if (container) {
    dialog = createPortal(
      <>
        <CSSTransition
          unmountOnExit
          timeout={300}
          in={isOpen}
          classNames="backdrop"
        >
          <div
            role="presentation"
            className="absolute h-screen w-full top-0 left-0 z-10 flex justify-center items-center"
            onClick={() => setIsOpen(false)}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === '27') {
                setIsOpen(false);
              }
            }}
          />
        </CSSTransition>
        <CSSTransition
          timeout={300}
          in={isOpen}
          unmountOnExit
          classNames="dialog"
        >
          {localTimerSettings && locallySelectedColor && locallySelectedFont ? (
            <div className="max-w-[327px] tablet:max-w-[540px] absolute w-full bg-white rounded-lg z-20">
              <div className="p-6 flex justify-between items-center border-b border-divider">
                <Typography variant="H2" color="dark">
                  Settings
                </Typography>
                <button
                  className="rounded-full bg-bg-light bg-opacity-0 hover:bg-opacity-100 transition-colors duration-200 w-8 h-8 flex justify-center items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <CrossIcon />
                </button>
              </div>
              <div className="px-6">
                <div className="pb-6 pt-6 border-b border-divider">
                  <Typography
                    variant="H4"
                    className="text-center tablet:text-left"
                    color="dark"
                  >
                    TIME (MINUTES)
                  </Typography>
                  <div className="flex flex-col space-y-5 mt-4 tablet:flex-row tablet:space-y-0 tablet:space-x-4">
                    <div className="flex tablet:flex-col tablet:space-y-2 justify-between items-center tablet:items-start">
                      <Typography variant="Body2">pomodoro</Typography>
                      <NumericInput
                        className="w-1/2 tablet:w-full"
                        value={localTimerSettings.pomodoro}
                        onChange={(e) =>
                          setLocalTimerSettings({
                            ...localTimerSettings,
                            pomodoro: Number.parseInt(e.target.value, 10),
                          })
                        }
                        onIncrement={() =>
                          setLocalTimerSettings({
                            ...localTimerSettings,
                            pomodoro: localTimerSettings.pomodoro + 1,
                          })
                        }
                        onDecrement={() =>
                          setLocalTimerSettings({
                            ...localTimerSettings,
                            pomodoro: localTimerSettings.pomodoro - 1,
                          })
                        }
                      />
                    </div>
                    <div className="flex tablet:flex-col tablet:space-y-2 justify-between items-center tablet:items-start">
                      <Typography variant="Body2">short break</Typography>
                      <NumericInput
                        className="w-1/2 tablet:w-full"
                        value={localTimerSettings.short_break}
                        onChange={(e) =>
                          setLocalTimerSettings({
                            ...localTimerSettings,
                            short_break: Number.parseInt(e.target.value, 10),
                          })
                        }
                        onIncrement={() =>
                          setLocalTimerSettings({
                            ...localTimerSettings,
                            short_break: localTimerSettings.short_break + 1,
                          })
                        }
                        onDecrement={() =>
                          setLocalTimerSettings({
                            ...localTimerSettings,
                            short_break: localTimerSettings.short_break - 1,
                          })
                        }
                      />
                    </div>
                    <div className="flex tablet:flex-col tablet:space-y-2 justify-between items-center tablet:items-start">
                      <Typography variant="Body2">long break</Typography>
                      <NumericInput
                        className="w-1/2 tablet:w-full"
                        value={localTimerSettings.long_break}
                        onChange={(e) =>
                          setLocalTimerSettings({
                            ...localTimerSettings,
                            long_break: Number.parseInt(e.target.value, 10),
                          })
                        }
                        onIncrement={() =>
                          setLocalTimerSettings({
                            ...localTimerSettings,
                            long_break: localTimerSettings.long_break + 1,
                          })
                        }
                        onDecrement={() =>
                          setLocalTimerSettings({
                            ...localTimerSettings,
                            long_break: localTimerSettings.long_break - 1,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="pb-6 pt-6 border-b border-divider tablet:flex tablet:items-center tablet:justify-between">
                  <Typography variant="H4" align="center" color="dark">
                    FONT
                  </Typography>
                  <div className="mt-4 tablet:mt-0 flex space-x-1 justify-center">
                    <button
                      className={clsx(
                        'rounded-full flex justify-center items-center font-sano h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300',
                        {
                          'bg-bg-dark text-white':
                            locallySelectedFont === 'sans',
                          'bg-bg-light text-dark':
                            locallySelectedFont !== 'sans',
                        }
                      )}
                      onClick={() => setLocallySelectedFont('sans')}
                    >
                      Aa
                    </button>
                    <button
                      className={clsx(
                        'rounded-full flex justify-center items-center font-serio h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300',
                        {
                          'bg-bg-dark text-white':
                            locallySelectedFont === 'serif',
                          'bg-bg-light text-dark':
                            locallySelectedFont !== 'serif',
                        }
                      )}
                      onClick={() => setLocallySelectedFont('serif')}
                    >
                      Aa
                    </button>
                    <button
                      className={clsx(
                        'rounded-full flex justify-center items-center font-mono h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300',
                        {
                          'bg-bg-dark text-white':
                            locallySelectedFont === 'mono',
                          'bg-bg-light text-dark':
                            locallySelectedFont !== 'mono',
                        }
                      )}
                      onClick={() => setLocallySelectedFont('mono')}
                    >
                      Aa
                    </button>
                  </div>
                </div>
                <div className="pb-16 pt-6  tablet:flex tablet:items-center tablet:justify-between">
                  <Typography variant="H4" align="center" color="dark">
                    COLOR
                  </Typography>
                  <div className="mt-4 tablet:mt-0 flex space-x-1 justify-center">
                    <button
                      className="rounded-full flex justify-center items-center h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300 bg-red p-2"
                      onClick={() => setLocallySelectedColor('red')}
                    >
                      {locallySelectedColor === 'red' ? (
                        <CheckmarkIcon />
                      ) : null}
                    </button>
                    <button
                      className="rounded-full flex justify-center items-center h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300 bg-blue p-2"
                      onClick={() => setLocallySelectedColor('blue')}
                    >
                      {locallySelectedColor === 'blue' ? (
                        <CheckmarkIcon />
                      ) : null}
                    </button>
                    <button
                      className="rounded-full flex justify-center items-center h-12 w-12 border-4 border-white hover:shadow-circle-option transition-shadow duration-300 bg-pink p-2"
                      onClick={() => setLocallySelectedColor('pink')}
                    >
                      {locallySelectedColor === 'pink' ? (
                        <CheckmarkIcon />
                      ) : null}
                    </button>
                  </div>
                </div>
              </div>
              <Button
                className="absolute top-full left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                onClick={onClickApplyChanges}
              >
                Apply
              </Button>
            </div>
          ) : null}
        </CSSTransition>
      </>,
      container
    );
  }

  return (
    <>
      {dialog}
      <div className="flex justify-center">
        <button className="group" onClick={() => setIsOpen(true)}>
          <GearIcon className="transition-opacity duration-200 opacity-50 group-hover:opacity-100" />
        </button>
      </div>
    </>
  );
};

export default SettingsDialog;
