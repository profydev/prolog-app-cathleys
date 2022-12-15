import { color, space, textFont } from "@styles/theme";
import React from "react";
import styled, { css } from "styled-components";

type CheckboxProps = {
  label?: string;
  size: CheckboxSize;
  state: CheckboxState;
};

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export enum CheckboxState {
  unchecked = "unchecked",
  checked = "checked",
  partlyChecked = "partlyChecked",
}

// Hides the default checkbox
const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

// Creates custom checkbox
const Checkmark = styled.span<{ size: CheckboxSize }>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ size }) => (size === "sm" ? "1rem" : "1.25rem")};
  width: ${({ size }) => (size === "sm" ? "1rem" : "1.25rem")};
  border: 1px solid ${color("gray", 300)};
  border-radius: ${({ size }) => (size === "sm" ? "4px" : "6px")};
`;

const Label = styled.label<{ size: CheckboxSize; state: CheckboxState }>`
  display: flex;
  align-items: center;
  position: relative;
  color: ${color("gray", 700)};
  letter-spacing: 0.7px;
  cursor: pointer;

  ${(props) => {
    switch (props.size) {
      case CheckboxSize.sm:
        switch (props.state) {
          case CheckboxState.unchecked:
            return css`
              padding-left: ${space(6)};
              ${textFont("sm", "medium")};
            `;

          case CheckboxState.checked:
            return css`
              padding-left: ${space(6)};
              ${textFont("sm", "medium")};
              // small check
              ${Checkmark}:after {
                left: 5px;
                top: 1px;
                width: 4px;
                height: 8px;
                border: solid ${color("primary", 600)};
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
              }
            `;

          case CheckboxState.partlyChecked:
            return css`
              padding-left: ${space(6)};
              ${textFont("sm", "medium")};
              ${Checkmark}:after {
                left: 4px;
                top: 6px;
                width: 6px;
                border: solid ${color("primary", 600)};
                border-width: 0 2px 2px 0;
              }
            `;
        }
        break;

      case CheckboxSize.md:
        switch (props.state) {
          case CheckboxState.unchecked:
            return css`
              padding-left: ${space(8)};
              ${textFont("md", "medium")};
            `;

          case CheckboxState.checked:
            return css`
              padding-left: ${space(8)};
              ${textFont("md", "medium")};
              ${Checkmark}:after {
                left: 7px;
                top: 2px;
                width: 4px;
                height: 10px;
                border: solid ${color("primary", 600)};
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
              }
            `;

          case CheckboxState.partlyChecked:
            return css`
              padding-left: ${space(8)};
              ${textFont("md", "medium")};
              ${Checkmark}:after {
                left: 5px;
                top: 8px;
                width: 8px;
                border: solid ${color("primary", 600)};
                border-width: 0 2px 2px 0;
              }
            `;
        }
    }
  }};

  /* Create the checkmark/indicator (hidden when not checked) */
  ${Checkmark}:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  ${Input}:checked ~ ${Checkmark}:after {
    display: block;
  }

  /* When the checkbox is checked: focused */
  ${Input}:checked ~ ${Checkmark} {
    background: white;
    border: 1px solid ${color("primary", 600)};
    box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
  }

  &:hover ${Input} ~ ${Checkmark} {
    background: ${color("primary", 50)};
    border: 1px solid ${color("primary", 600)};
  }

  &:disabled ${Input}~ ${Checkmark} {
    background: ${color("gray", 100)};
    border: 1px solid ${color("gray", 200)};
    color: ${color("gray", 300)};
  }
`;

export function Checkbox({
  label,
  size = CheckboxSize.md,
  state,
}: CheckboxProps) {
  return (
    <Label size={size} state={state}>
      {label}
      <Input type="checkbox" />
      <Checkmark size={size} />
    </Label>
  );
}
