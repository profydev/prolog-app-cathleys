import React from "react";
import styled from "styled-components";
import { color, space, textFont } from "@styles/theme";

const Wrapper = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
`;
const Box = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem 0;
  background: ${color("gray", 50)};

  @media (max-width: 30rem) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const VersionText = styled.div`
  color: ${color("gray", 400)};
  ${textFont("md", "regular")};
  padding-left: ${space(8)};

  @media (max-width: 30rem) {
    padding-left: ${space(0)};
    padding-top: ${space(6)};
  }
`;

const AnchorLinks = styled.div`
  display: inline-flex;
  align-items: center;
`;
const Anchor = styled.a`
  margin-right: ${space(6)};
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
  text-decoration: none;

  &:hover {
    color: ${color("gray", 600)};
  }
`;
const Logo = styled.img`
  padding-right: ${space(8)};

  @media (max-width: 30rem) {
    padding-right: ${space(0)};
    padding-bottom: ${space(6)};
  }
`;
export function Footer() {
  return (
    <Wrapper className="footer">
      <Box>
        <VersionText data-cy="version">
          Version: {process.env.NEXT_PUBLIC_VERSION}
        </VersionText>

        <AnchorLinks>
          <Anchor href="#docs">Docs</Anchor>
          <Anchor href="#api">API</Anchor>
          <Anchor href="#help">Help</Anchor>
          <Anchor href="#community">Community</Anchor>
        </AnchorLinks>
        <Logo src={"/icons/logo-small.svg"} alt=" prolog logo" />
      </Box>
    </Wrapper>
  );
}
