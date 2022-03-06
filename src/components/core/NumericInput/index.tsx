import { DownArrowIcon, UpArrowIcon } from '@icons';
import clsx from 'clsx';
import React, { FC } from 'react';

import { NumericInputProps } from './types';

const NumericInput: FC<NumericInputProps> = ({
  value,
  onChange,
  onIncrement,
  onDecrement,
  className = '',
}) => {
  return (
    <div className={clsx('relative', className)}>
      <input
        className={clsx(
          'rounded-l-xl rounded-r-xl py-2 bg-bg-light indent-4 w-full'
        )}
        type='number'
        min='0'
        value={value}
        onChange={onChange}
      />
      <div className='absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1'>
        <button
          className='p-1'
          onClick={() => (value < 60 ? onIncrement() : null)}
        >
          <UpArrowIcon />
        </button>
        <button
          className='p-1'
          onClick={() => (value > 1 ? onDecrement() : null)}
        >
          <DownArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default NumericInput;
