import { ControlOption } from '../../types';

export type ControlBarProps = {
  selectedOption: ControlOption;
  onOptionChanged: (option: ControlOption) => void;
};
