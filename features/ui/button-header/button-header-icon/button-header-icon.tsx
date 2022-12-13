import { space } from "@styles/theme";
import React from "react";
import styled, { css } from "styled-components";

export enum ButtonIcons {
  leading = "leading",
  trailing = "trailing",
  only = "only",
}

type ButtonIconProps = {
  icon: ButtonIcons;
  label?: string;
  iconSrc: string;
};

const Icon = styled.img``;

const Text = styled.p`
  margin: ${space(0)};
  letter-spacing: normal;
`;

const ButtonStyle = styled.div<{ icon: ButtonIcons }>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    switch (props.icon) {
      case ButtonIcons.leading:
        return css`
          flex-direction: row;

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

export function ButtonwithIcon({ icon, label, iconSrc }: ButtonIconProps) {
  return (
    <ButtonStyle icon={icon}>
      <Icon src={iconSrc} alt="icon" />
      <Text>{label}</Text>
    </ButtonStyle>
  );
}
