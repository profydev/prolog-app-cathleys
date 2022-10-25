import React from "react";
import Link from "next/link";
import { color, textFont } from "@styles/theme";
import styled from "styled-components";

type EmailAppProps = {
  text: string;
  href: string;
};

export const OpenEmailButton = styled.button`
  padding: 0.625rem 1.5rem;
  margin: 0 0 0 0.375rem;
  border: none;
  border-radius: 0.5rem;
  background: ${color("primary", 600)};
  ${textFont("md", "medium")};

  @media (max-width: 26.563em) {
    padding: 0.625rem 0.609rem;
  }

  &:hover {
    background: ${color("primary", 700)};
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: white;
`;

export function EmailApp(props: EmailAppProps) {
  const { text, href } = props;

  return (
    <Link href={href} passHref>
      <Anchor as={OpenEmailButton}>{text}</Anchor>
    </Link>
  );
}
