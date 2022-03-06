import { useStore } from '@src/store';
import { ControlOption } from '@src/types/timer';
import React, { FC } from 'react';

import { Button } from './components';

const ControlBar: FC = () => {
  const selectedOption = useStore((state) => state.selectedOption);
  const setSelectedOption = useStore((state) => state.setSelectedOption);

  const onOptionChanged = (option: ControlOption) => {
    setSelectedOption(option);
  };

  return (
    <div className='flex bg-bg-dark rounded-r-full rounded-l-full p-2 overflow-hidden'>
      <Button
        isActive={selectedOption === 'pomodoro'}
        controlOption='pomodoro'
        title='pomodoro'
        onClick={(option) => onOptionChanged(option)}
      />
      <Button
        isActive={selectedOption === 'short_break'}
        controlOption='short_break'
        title='short break'
        onClick={(option) => onOptionChanged(option)}
      />
      <Button
        isActive={selectedOption === 'long_break'}
        controlOption='long_break'
        title='long break'
        onClick={(option) => onOptionChanged(option)}
      />
    </div>
  );
};

export default ControlBar;
