import React from "react";
import styled from "styled-components";
import { color, textFont } from "@styles/theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15.25rem;
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
`;

const VersionText = styled.div`
  color: ${color("gray", 500)};
`;

const Anchor = styled.a`
  margin-right: 24px;
  margin-bottom: 18px;
  color: ${color("gray", 500)};
  text-decoration: none;

  &:hover {
    background: ${color("gray", 200)};
  }
`;

export function Footer() {
  return (
    <Wrapper>
      <VersionText>{process.env.NEXT_PUBLIC_VERSION}</VersionText>

      <div>
        <Anchor href="#docs">Docs</Anchor>
        <Anchor href="#api">API</Anchor>
        <Anchor href="#help">Help</Anchor>
        <Anchor href="#community">Community</Anchor>
      </div>

      <div>
        <img src={"/icons/logo-small.svg"} alt="logo" />
      </div>
    </Wrapper>
  );
}
