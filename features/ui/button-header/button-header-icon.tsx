import { space } from "@styles/theme";
import React from "react";
import styled, { css } from "styled-components";
import { ButtonColor, ButtonSize, UiButton } from "./button-header";

export enum ButtonIcons {
  leading = "leading",
  trailing = "trailing",
  only = "only",
}

type ButtonIconProps = {
  icon: ButtonIcons;
  label?: string;
  iconSrc: string;
  onClick?: () => void;
  color: ButtonColor;
  size: ButtonSize;
};

const Icon = styled.img``;

const Text = styled.p`
  margin: ${space(0)};
  letter-spacing: normal;
`;

const ButtonStyle = styled(UiButton)<{ icon: ButtonIcons }>`
  display: flex;
  justify-content: center;
  ${(props) => {
    switch (props.icon) {
      case ButtonIcons.leading:
        return css`
          ${Icon} {
            padding-right: 0.5rem;
          }
        `;
      case ButtonIcons.trailing:
        return css`
          flex-direction: row-reverse;

          ${Icon} {
            padding-left: 0.5rem;
          }
        `;
      case ButtonIcons.only:
        return css`
          ${Text} {
            display: none;
          }
        `;
    }
  }}
`;

export function ButtonHeaderIcon({
  label,
  iconSrc,
  color = ButtonColor.primary,
  size = ButtonSize.md,
  ...props
}: ButtonIconProps) {
  return (
    <ButtonStyle {...props} color={color} size={size}>
      <Icon alt="icon" src={iconSrc} />
      <Text>{label}</Text>
    </ButtonStyle>
  );
}
