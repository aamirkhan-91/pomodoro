import { ControlOption } from '@src/types/timer';

export type ButtonProps = {
  isActive?: boolean;
  title: string;
  controlOption: ControlOption;
  onClick: (option: ControlOption) => void;
};
