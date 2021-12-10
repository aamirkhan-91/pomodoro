import './src/styles/global.css';

import { ThemeProvider } from '@state/theme';
import { TimerProvider } from '@state/timer';
import React from 'react';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <TimerProvider>{element}</TimerProvider>
    </ThemeProvider>
  );
};
