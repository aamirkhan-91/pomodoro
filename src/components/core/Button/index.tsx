import { useStore } from '@src/store';
import clsx from 'clsx';
import React, { FC } from 'react';

import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  const selectedColor = useStore((state) => state.selectedColor);

  let classes = [
    'rounded-r-full',
    'rounded-l-full',
    'py-4',
    'px-11',
    'text-white',
    'transition-all',
    'duration-200',
  ];

  switch (selectedColor) {
    case 'blue':
      classes = classes.concat('bg-blue');
      break;

    case 'pink':
      classes = classes.concat('bg-pink');
      break;

    case 'red':
      classes = classes.concat('bg-red');
      break;
  }

  return (
    <button className={clsx(className, classes)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
