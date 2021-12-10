export type TypographyVariant = 'H1' | 'H2' | 'H3' | 'H4' | 'Body1' | 'Body2';
export type TypographyColor = 'primary' | 'white' | 'dark';
export type TypographyAlign = 'left' | 'center' | 'right';

export type TypographyProps = {
  variant: TypographyVariant;
  color?: TypographyColor;
  align?: TypographyAlign;
  className?: string;
};
