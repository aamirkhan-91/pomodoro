import { Pomodoro, SettingsDialog } from '@components';
import { Typography } from '@core-components';
import React, { FC } from 'react';

const IndexPage: FC = () => {
  return (
    <>
      <div id="modal-root" />
      <div className="bg-bg h-full px-6 py-8 flex flex-col justify-between">
        <title>Pomodoro</title>
        <Typography variant="H2" align="center" className="mb-11 tablet:mb-14">
          pomodoro
        </Typography>
        <Pomodoro />
        <SettingsDialog />
      </div>
    </>
  );
};

export default IndexPage;
