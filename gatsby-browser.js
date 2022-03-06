import './src/styles/global.css';

import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from './src/images/favicon.ico';

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <link rel='icon' type='image/png' href={favicon} sizes='16x16' />
        <title>Pomodoro</title>
      </Helmet>
      {element}
    </>
  );
};
