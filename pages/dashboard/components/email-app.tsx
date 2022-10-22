import React from "react";
import Link from "next/link";
import { Anchor, OpenEmailButton } from "./modal.style";

type EmailAppProps = {
  text: string;
  href: string;
};

export function EmailApp(props: EmailAppProps) {
  const { text, href } = props;

  return (
    <Link href={href} passHref>
      <Anchor as={OpenEmailButton}>{text}</Anchor>
    </Link>
  );
}
