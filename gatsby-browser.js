import './src/styles/global.css';

import { ThemeProvider } from '@state/theme';
import { TimerProvider } from '@state/timer';
import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from './src/images/favicon.ico';

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        <title>Pomodoro</title>
      </Helmet>
      <ThemeProvider>
        <TimerProvider>{element}</TimerProvider>
      </ThemeProvider>
    </>
  );
};
