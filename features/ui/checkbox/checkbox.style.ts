import styled, { css } from "styled-components";
import { color, space } from "@styles/theme";
import { CheckboxSize, CheckboxState } from "./checkbox";

// Hides the default checkbox
export const DInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

// Creates custom checkbox
export const Checkmark = styled.span<{ size: CheckboxSize }>`
  position: absolute;
  left: 0;
  height: ${({ size }) => (size === "sm" ? "1rem" : "1.25rem")};
  width: ${({ size }) => (size === "sm" ? "1rem" : "1.25rem")};
  border: 1px solid ${color("gray", 300)};
  border-radius: ${({ size }) => (size === "sm" ? "4px" : "6px")};
`;

export const DLabel = styled.label<{
  size: CheckboxSize;
  check: CheckboxState;
}>`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  ${(props) => {
    switch (props.size) {
      case CheckboxSize.sm:
        switch (props.check) {
          case CheckboxState.unchecked:
            return css`
              padding-left: ${space(6)};
            `;

          case CheckboxState.checked:
            return css`
              padding-left: ${space(6)};

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
        switch (props.check) {
          case CheckboxState.unchecked:
            return css`
              padding-left: ${space(8)};
            `;

          case CheckboxState.checked:
            return css`
              padding-left: ${space(8)};

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
  ${DInput}:checked ~ ${Checkmark}:after {
    display: block;
  }

  /* When the checkbox is checked */
  ${DInput}:checked ~ ${Checkmark} {
    background: white;
    border: 1px solid ${color("primary", 600)};
  }

  &:hover ${DInput} ~ ${Checkmark} {
    background: ${color("primary", 50)};
    border: 1px solid ${color("primary", 600)};
  }

  &:disabled ${DInput}~ ${Checkmark} {
    background: ${color("gray", 100)};
    border: 1px solid ${color("gray", 200)};
    color: ${color("gray", 300)};
  }

  &:indeterminate ${DInput}~ ${Checkmark} {
  }
`;
