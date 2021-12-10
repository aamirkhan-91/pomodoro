import { useTheme } from '@hooks/useTheme';
import clsx from 'clsx';
import React, { FC } from 'react';

import { TypographyProps } from './types';

const Typography: FC<TypographyProps> = ({
  variant,
  color = 'primary',
  align,
  className = '',
  children,
}) => {
  const { selectedFont } = useTheme();
  let classes: string[] = [className];

  switch (selectedFont) {
    case 'mono':
      classes = classes.concat('font-mono');
      break;

    case 'sans':
      classes = classes.concat('font-sans');
      break;

    case 'serif':
      classes = classes.concat('font-serif');
      break;

    default:
      break;
  }

  switch (color) {
    case 'primary':
      classes = classes.concat('text-primary');
      break;

    case 'dark':
      classes = classes.concat('text-dark');
      break;

    case 'white':
      classes = classes.concat('text-white');
      break;

    default:
      break;
  }

  switch (align) {
    case 'center':
      classes = classes.concat('text-center');
      break;

    case 'right':
      classes = classes.concat('text-right');
      break;

    case 'left':
      classes = classes.concat('text-left');
      break;

    default:
      break;
  }

  if (variant === 'H1') {
    classes = classes.concat('text-H1-mobile tablet:text-H1');
    return <h1 className={clsx(classes)}>{children}</h1>;
  }

  if (variant === 'H2') {
    classes = classes.concat('text-H2');
    return <h2 className={clsx(classes)}>{children}</h2>;
  }

  if (variant === 'H3') {
    classes = classes.concat('text-H3');
    return <h3 className={clsx(classes)}>{children}</h3>;
  }

  if (variant === 'H4') {
    classes = classes.concat('text-H14');
    return <h4 className={clsx(classes)}>{children}</h4>;
  }

  if (variant === 'Body1') {
    classes = classes.concat('text-Body1');
    return <p className={clsx(classes)}>{children}</p>;
  }

  return <p className={clsx(classes, 'text-Body2')}>{children}</p>;
};

export default Typography;
