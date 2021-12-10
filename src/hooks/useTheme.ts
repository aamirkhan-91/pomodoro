import { ColorType, FontType } from '@src/types/theme';
import { THEME_ACTIONS, ThemeContext } from '@state/theme';
import { useCallback, useContext } from 'react';

export const useTheme = (): {
  selectedFont: FontType;
  selectedColor: ColorType;
  setFont: (payload: FontType) => void;
  setColor: (payload: ColorType) => void;
} => {
  const { state, dispatch } = useContext(ThemeContext);

  const { selectedFont, selectedColor } = state;

  const setFont = useCallback(
    (payload: FontType) => {
      dispatch({
        type: THEME_ACTIONS.SET_FONT,
        payload,
      });
    },
    [dispatch]
  );

  const setColor = useCallback(
    (payload: ColorType) => {
      dispatch({
        type: THEME_ACTIONS.SET_COLOR,
        payload,
      });
    },
    [dispatch]
  );

  return {
    selectedFont,
    selectedColor,
    setFont,
    setColor,
  };
};
