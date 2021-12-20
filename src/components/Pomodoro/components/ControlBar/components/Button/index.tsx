import { Typography } from '@core-components';
import { useTheme } from '@hooks/useTheme';
import clsx from 'clsx';
import React, { FC } from 'react';

import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
  title,
  controlOption,
  isActive = false,
  onClick,
}) => {
  const { selectedColor } = useTheme();
  let bgColor;

  switch (selectedColor) {
    case 'blue':
      bgColor = 'bg-blue';
      break;

    case 'pink':
      bgColor = 'bg-pink';
      break;

    case 'red':
      bgColor = 'bg-red';
      break;
  }

  return (
    <button
      className={clsx(
        'w-[110px] tablet:w-[120px] py-4 px-5 rounded-l-full rounded-r-full flex-1 transition-colors duration-150 group',
        {
          [bgColor]: isActive,
        }
      )}
      onClick={() => onClick(controlOption)}
    >
      <Typography
        align="center"
        color={isActive ? 'dark' : 'primary'}
        className={clsx(
          'group-hover:text-opacity-100 transition-colors duration-200',
          {
            'text-opacity-40': !isActive,
          }
        )}
        variant="Body2"
      >
        {title}
      </Typography>
    </button>
  );
};

export default Button;
