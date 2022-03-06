import { Pomodoro, SettingsDialog } from '@components';
import React, { FC } from 'react';

const IndexPage: FC = () => {
  return (
    <>
      <div id='modal-root' />
      <div className='bg-bg h-full px-6 py-8 flex flex-col justify-between'>
        <Pomodoro />
        <SettingsDialog />
      </div>
    </>
  );
};

export default IndexPage;
