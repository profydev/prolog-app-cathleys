import styled from "styled-components";
import { MyCheckboxProps } from "./new-checkbox";
import { space, color } from "@styles/theme";

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${space(3)};
`;
export const CheckboxDisplay = styled.div``;
export const CheckboxText = styled.div``;

export const CheckboxInput = styled.input.attrs((props: MyCheckboxProps) => ({
  type: "checkbox",
  ...props,
}))`
  display: none;

  & + ${CheckboxDisplay} {
    width: ${space(5)};
    height: ${space(5)};
    border: 1px solid ${color("gray", 300)};
    border-radius: 6px;
    box-sizing: border-box;
  }

  &:checked + ${CheckboxDisplay} {
    border-color: ${color("primary", 600)};
    box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
    background: no-repeat center/80% url("/icons/check-md.svg");
  }

  &:indeterminate + ${CheckboxDisplay} {
    border-color: ${color("primary", 600)};
    box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
    background: no-repeat center/80% url("/icons/check-partialmd.svg");
  }

  &:hover + ${CheckboxDisplay} {
    border-color: ${color("primary", 600)};
  }

  &:disabled + ${CheckboxDisplay} {
    background: ${color("gray", 100)};
    border: 1px solid ${color("gray", 200)};
    color: ${color("gray", 300)};
  }
`;
