import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { CancelButton } from "./modal.style";
import { color } from "@styles/theme";

type EmailAppProps = {
  text: string;
  href: string;
};

const OpenEmailButton = styled(CancelButton)`
  padding: 0.625rem 1.5rem;
  margin: 0 0 0 0.375rem;
  background: ${color("primary", 600)};

  &:hover {
    background: ${color("primary", 700)};
  }

  @media (max-width: 26.563em) {
    padding: 0.625rem 0.609rem;
  }
`;

const Anchor = styled.a`
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
