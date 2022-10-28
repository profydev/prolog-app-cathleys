import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { color, space, textFont } from "@styles/theme";

type EmailButtonProps = {
  text: string;
  href: string;
};

export const Icon = styled.img`
  padding-top: ${space(6)};
`;

export const Title = styled.div`
  display: flex;
  padding-top: ${space(5)};
  color: ${color("gray", 900)};
  ${textFont("lg", "medium")};
`;

export const Text = styled.div`
  padding: ${space(2, 6, 0)};
  text-align: center;
  color: ${color("gray", 500)};
  ${textFont("sm", "regular")};
`;

export const ButtonWrapper = styled.div`
  display: flex;

  flex-direction: row;
  padding-top: ${space(8)};
  padding-bottom: ${space(6)};
  ${textFont("md", "medium")};
  transition: all 0.5s ease;
`;
export const CancelButton = styled.button`
  padding: 0.719rem 3.656rem;
  margin-right: ${space(3)};
  border-radius: 0.5rem;
  border: 1px solid ${color("gray", 300)};
  color: ${color("gray", 700)};

  @media (max-width: 26.75rem) {
    padding: 0.656rem 2.766rem;
  }

  &:hover {
    color: ${color("gray", 600)};
  }
`;
const EmailApp = styled.button`
  padding: 0.719rem ${space(6)};
  border-radius: 0.5rem;
  border: none;
  background: ${color("primary", 600)};
  margin: ${space(0)};
  transition: all 0.5s ease;
  @media (max-width: 26.75rem) {
    padding: 0.656rem 0.609rem;
  }

  &:hover {
    background: ${color("primary", 700)};
  }
`;

const Anchor = styled.a`
  color: white;
`;

export function EmailButton({ text, href }: EmailButtonProps) {
  return (
    <Link href={href} passHref>
      <Anchor as={EmailApp}>{text}</Anchor>
    </Link>
  );
}
