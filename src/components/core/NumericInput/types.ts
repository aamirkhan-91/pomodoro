export type NumericInputProps = {
  value: number;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onIncrement: () => void;
  onDecrement: () => void;
};
