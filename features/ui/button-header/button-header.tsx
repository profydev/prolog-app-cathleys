import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { color, space, textFont } from "@styles/theme";

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

type ButtonProps = {
  size: ButtonSize;
  color: ButtonColor;
  label: string;
  href: string;
};

export const UiButton = styled.button<{
  size: ButtonSize;
  color: ButtonColor;
}>`
  width: fit-content;
  text-align: center;
  border: none;
  letter-spacing: 0.044rem;
  border-radius: 0.5rem;

  ${(props) => {
    switch (props.size) {
      case ButtonSize.sm:
        return css`
          padding: ${space(2)} 0.875rem;
          background: ${color("primary", 600)};
          ${textFont("sm", "medium")};
        `;
      case ButtonSize.md:
        return css`
          padding: 0.625rem ${space(4)};
          background: ${color("primary", 600)};
          ${textFont("sm", "medium")};
        `;
      case ButtonSize.lg:
        return css`
          padding: 0.625rem 1.125rem;
          background: ${color("primary", 600)};
          ${textFont("md", "medium")};
        `;
      case ButtonSize.xlg:
        return css`
          padding: ${space(3)} ${space(5)};
          background: ${color("primary", 600)};
          ${textFont("md", "medium")};
        `;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case ButtonColor.primary:
        return css`
          background: ${color("primary", 600)};
          color: white;

          &:hover {
            background: ${color("primary", 700)};
          }
          &:focus {
            background: ${color("primary", 600)};
            border: 1px solid ${color("primary", 600)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px ${color("primary", 100)};
          }
          &:disabled {
            background: ${color("primary", 200)};
          }
        `;
      case ButtonColor.secondary:
        return css`
          background: ${color("primary", 50)};
          color: ${color("primary", 700)};

          &:hover {
            background: ${color("primary", 100)};
          }

          &:focus {
            background: ${color("primary", 50)};
            border: 1px solid ${color("primary", 50)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px ${color("primary", 100)};
          }
          &:disabled {
            background: ${color("primary", 25)};
            color: ${color("primary", 300)};
          }
        `;
      case ButtonColor.gray:
        return css`
          background: white;
          color: ${color("gray", 700)};
          border: 1px solid ${color("gray", 300)};

          &:hover {
            background: ${color("gray", 50)};
            color: ${color("gray", 800)};
            border: 1px solid ${color("gray", 300)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          }
          &:focus {
            background: white;
            color: ${color("gray", 700)};
            border: 1px solid ${color("gray", 300)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px ${color("gray", 100)};
          }
          &:disabled {
            background: white;
            color: ${color("gray", 300)};
            border: 1px solid ${color("gray", 200)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          }
        `;
      case ButtonColor.empty:
        return css`
          background: none;
          color: ${color("primary", 700)};

          &:hover {
            background: ${color("primary", 50)};
          }
          &:focus {
            background: none;
          }
          &:disabled {
            color: ${color("gray", 300)};
          }
        `;
      case ButtonColor.emptyGray:
        return css`
          background: none;
          color: ${color("gray", 500)};

          &:hover {
            background: ${color("gray", 50)};
            color: ${color("gray", 600)};
          }
          &:focus {
            background: none;
          }
          &:disabled {
            color: ${color("gray", 300)};
          }
        `;
      case ButtonColor.error:
        return css`
          background: ${color("error", 600)};
          color: white;

          &:hover {
            background: ${color("error", 700)};
          }

          &:focus {
            background: ${color("error", 600)};
            border: 1px solid ${color("error", 600)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px ${color("error", 100)};
          }

          &:disabled {
            background: ${color("error", 200)};
          }
        `;
    }
  }}
`;

const Anchor = styled.a`
  text-decoration: none;
`;

export function ButtonHeader({
  size = ButtonSize.md,
  color = ButtonColor.primary,
  label,
  href,
}: ButtonProps) {
  return (
    <Link href={href} passHref>
      <Anchor as={UiButton} size={size} color={color}>
        {label}
      </Anchor>
    </Link>
  );
}
