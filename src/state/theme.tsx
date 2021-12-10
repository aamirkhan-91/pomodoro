import { ColorType, FontType } from '@src/types/theme';
import React, { createContext, Dispatch, FC, useMemo, useReducer } from 'react';

export enum THEME_ACTIONS {
  SET_FONT = 'SET_FONT',
  SET_COLOR = 'SET_COLOR',
}

type State = {
  selectedFont: FontType;
  selectedColor: ColorType;
};

const initialState: State = {
  selectedFont: 'sans',
  selectedColor: 'red',
};

type Store = {
  state: State;
  dispatch: Dispatch<ActionType>;
};

type SetFontActionType = {
  type: THEME_ACTIONS.SET_FONT;
  payload: FontType;
};

type SetColorActionType = {
  type: THEME_ACTIONS.SET_COLOR;
  payload: ColorType;
};

type ActionType = SetFontActionType | SetColorActionType;

export const SetFontAction = (payload: FontType): SetFontActionType => {
  return {
    type: THEME_ACTIONS.SET_FONT,
    payload,
  };
};

export const SetColorAction = (payload: ColorType): SetColorActionType => {
  return {
    type: THEME_ACTIONS.SET_COLOR,
    payload,
  };
};

const themeReducer = (state: State, action: ActionType): State => {
  if (action.type === 'SET_COLOR') {
    return {
      ...state,
      selectedColor: action.payload,
    };
  }

  if (action.type === 'SET_FONT') {
    return {
      ...state,
      selectedFont: action.payload,
    };
  }

  return state;
};

export const ThemeContext = createContext<Store>({
  state: initialState,
  dispatch: () => null,
});

export const ThemeProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={useMemo(
        () => ({
          state,
          dispatch,
        }),
        [state]
      )}
    >
      {children}
    </ThemeContext.Provider>
  );
};
