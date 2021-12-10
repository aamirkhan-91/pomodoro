import React, { FC } from 'react';

import { Button } from './components';
import { ControlBarProps } from './types';

const ControlBar: FC<ControlBarProps> = ({
  selectedOption,
  onOptionChanged,
}) => {
  return (
    <div className="flex bg-bg-dark rounded-r-full rounded-l-full p-2 overflow-hidden">
      <Button
        isActive={selectedOption === 'pomodoro'}
        controlOption="pomodoro"
        title="pomodoro"
        onClick={(option) => onOptionChanged(option)}
      />
      <Button
        isActive={selectedOption === 'short_break'}
        controlOption="short_break"
        title="short break"
        onClick={(option) => onOptionChanged(option)}
      />
      <Button
        isActive={selectedOption === 'long_break'}
        controlOption="long_break"
        title="long break"
        onClick={(option) => onOptionChanged(option)}
      />
    </div>
  );
};

export default ControlBar;
