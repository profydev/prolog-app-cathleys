import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { space, color } from "@styles/theme";

type ButtonProps = {
  href: string;
  label: string;
};

const Button = styled.button`
  padding: 0.719rem ${space(6)};
  border-radius: 0.5rem;
  border: none;
  background: ${color("primary", 600)};
  margin: ${space(0)};
  transition: all 0.5s ease;
  cursor: pointer;

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

export function EmailButton({ href, label }: ButtonProps) {
  return (
    <Link href={href} passHref>
      <Anchor as={Button}>{label}</Anchor>
    </Link>
  );
}
