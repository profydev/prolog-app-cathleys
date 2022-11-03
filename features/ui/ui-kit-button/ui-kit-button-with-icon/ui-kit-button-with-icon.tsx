import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { UiButton } from "../ui-kit-button";
import { space } from "@styles/theme";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xlg = "xlg",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
}

export enum ButtonIcons {
  leading = "leading",
  trailing = "trailing",
  only = "only",
}
type ButtonwithIconProps = {
  size: ButtonSize;
  color: ButtonColor;
  label?: string;
  href: string;
  disabled?: string;
  icon: ButtonIcons;
  text: string;
};

export const Button = styled(UiButton)`
  padding: 0;
`;

const Anchor = styled.a`
  text-decoration: none;
`;

const Icon = styled.img``;

const Word = styled.p`
  margin: ${space(0)};
`;

const ContainerStyle = styled.div<{ icon: ButtonIcons }>`
  display: flex;

  ${(props) => {
    switch (props.icon) {
      case ButtonIcons.leading:
        return css`
          flex-direction: row;
          padding: 0.625rem ${space(4)} 0.625rem 1.063rem;

          ${Icon} {
            padding-right: 0.438rem;
          }
        `;
      case ButtonIcons.trailing:
        return css`
          flex-direction: row-reverse;
          padding: 0.625rem 1.063rem 0.625rem ${space(4)};

          ${Icon} {
            padding-left: 0.438rem;
          }
        `;
      case ButtonIcons.only:
        return css`
          padding: 0.625rem;

          ${Word} {
            display: none;
          }
        `;
    }
  }}
`;

export function ButtonwithIcon({
  size = ButtonSize.md,
  color = ButtonColor.primary,
  icon,
  href,
  label,
  disabled,
  text,
}: ButtonwithIconProps) {
  return (
    <Link href={href} passHref>
      <Anchor as={Button} size={size} color={color} disabled={disabled}>
        <ContainerStyle icon={icon}>
          <Icon src="./icons/button-icon.svg" alt={`${text} icon`} />
          <Word>{label}</Word>
        </ContainerStyle>
      </Anchor>
    </Link>
  );
}
