import { Typography } from '@core-components';
import React, { FC } from 'react';

import { ControlBar, Timer } from './components';

const Pomodoro: FC = () => {
  return (
    <>
      <Typography variant='H2' align='center' className='mb-11 tablet:mb-14'>
        pomodoro
      </Typography>
      <div className='flex flex-col flex-1 justify-between items-center'>
        <ControlBar />
        <Timer />
      </div>
    </>
  );
};

export default Pomodoro;
