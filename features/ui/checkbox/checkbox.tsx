import { color, space, textFont } from "@styles/theme";
import React from "react";
import styled, { css } from "styled-components";
import checkboxStories from "./checkbox.stories";

type CheckboxProps = {
  label?: string;
  size: CheckboxSize;
  default?: CheckboxDynamicState;
  disabled?: string;
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

export enum CheckboxDynamicState {
  default = "default",
  hover = "hover",
  focus = "focus",
  disabled = "disabled",
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
const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 1.25rem;
  width: 1.25rem;
  border: 1px solid ${color("gray", 300)};
  border-radius: 6px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: ${space(8)};
  color: ${color("gray", 700)};
  ${textFont("md", "medium")};
  letter-spacing: 0.7px;
  cursor: pointer;

  &:default {
    background: white;
    border: 1px solid ${color("gray", 300)};
  }

  &:hover ${Input} ~ ${Checkmark} {
    background: ${color("primary", 50)};
    border: 1px solid ${color("primary", 600)};
  }

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

  /* Style the checkmark/indicator */
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

  /* When the checkbox is checked: focused */
  ${Input}:checked ~ ${Checkmark} {
    background: white;
    border: 1px solid ${color("primary", 600)};
    box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
  }
`;

export function Checkbox({ label }: CheckboxProps) {
  return (
    <Label>
      {" "}
      {label}
      <Input type="checkbox" />
      <Checkmark />
    </Label>
  );
}
