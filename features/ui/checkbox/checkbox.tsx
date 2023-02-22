import { DLabel, DInput, Checkmark } from "./checkbox.style";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export enum CheckboxState {
  unchecked = "unchecked",
  checked = "checked",
  partlyChecked = "partlyChecked",
}

type CheckboxProps = {
  label?: string;
  size: CheckboxSize;
  check: CheckboxState;
  checked?: boolean;
  indeterminate?: boolean;
  type?: never;
};

export const Checkbox = ({
  size,
  label,
  check = CheckboxState.unchecked,
}: CheckboxProps) => {
  return (
    <DLabel check={check} size={size}>
      <DInput type="checkbox" />
      <Checkmark size={size} />
      {label}
    </DLabel>
  );
};
