import { ControlOption, TimerSettings } from '@src/types/timer';
import React, { createContext, Dispatch, FC, useMemo, useReducer } from 'react';

export enum TIMER_ACTIONS {
  SET_TIMER_SETTINGS = 'SET_TIMER',
  SET_PAUSED = 'SET_PAUSED',
  SET_RUNNING = 'SET_RUNNING',
  SET_OPTION = 'SET_OPTION',
  UPDATE_PROGRES = 'UPDATE_PROGRESS',
  RESTART = 'RESTART',
}

type RestartAction = {
  type: TIMER_ACTIONS.RESTART;
};

type UpdateProgressAction = {
  type: TIMER_ACTIONS.UPDATE_PROGRES;
};

type SetTimerSettingsAction = {
  type: TIMER_ACTIONS.SET_TIMER_SETTINGS;
  payload: TimerSettings;
};

type SetPausedAction = {
  type: TIMER_ACTIONS.SET_PAUSED;
  payload: boolean;
};

type SetRunningAction = {
  type: TIMER_ACTIONS.SET_RUNNING;
  payload: boolean;
};

type SetOptionAction = {
  type: TIMER_ACTIONS.SET_OPTION;
  payload: ControlOption;
};

type Action =
  | SetTimerSettingsAction
  | SetPausedAction
  | SetRunningAction
  | SetOptionAction
  | UpdateProgressAction
  | RestartAction;

type State = {
  selectedOption: ControlOption;
  progress: number;
  isRunning: boolean;
  isPaused: boolean;
  timerSettings: TimerSettings;
};

type Store = {
  state: State;
  dispatch: Dispatch<Action>;
};

const initialState: State = {
  selectedOption: 'pomodoro',
  progress: 0,
  isRunning: false,
  isPaused: false,
  timerSettings: {
    pomodoro: 25,
    short_break: 5,
    long_break: 15,
  },
};

const timerReducer = (state: State, action: Action): State => {
  if (action.type === TIMER_ACTIONS.UPDATE_PROGRES) {
    return {
      ...state,
      progress: state.progress + 1,
    };
  }

  if (action.type === TIMER_ACTIONS.SET_TIMER_SETTINGS) {
    return {
      ...state,
      isPaused: false,
      isRunning: false,
      progress: 0,
      timerSettings: action.payload,
    };
  }

  if (action.type === TIMER_ACTIONS.SET_PAUSED) {
    return {
      ...state,
      isPaused: action.payload,
    };
  }

  if (action.type === TIMER_ACTIONS.SET_RUNNING) {
    return {
      ...state,
      isRunning: action.payload,
    };
  }

  if (action.type === TIMER_ACTIONS.SET_OPTION) {
    return {
      ...state,
      selectedOption: action.payload,
      isPaused: false,
      isRunning: false,
      progress: 0,
    };
  }

  if (action.type === TIMER_ACTIONS.RESTART) {
    return {
      ...state,
      progress: 0,
      isRunning: true,
      isPaused: false,
    };
  }

  return state;
};

export const TimerContext = createContext<Store>({
  state: initialState,
  dispatch: () => null,
});

export const TimerProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  return (
    <TimerContext.Provider
      value={useMemo(
        () => ({
          state,
          dispatch,
        }),
        [state]
      )}
    >
      {children}
    </TimerContext.Provider>
  );
};
