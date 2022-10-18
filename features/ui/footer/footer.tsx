import { color, space, textFont } from "@styles/theme";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15.25rem;
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
`;

const ContentLinks = styled.ul`
  display: flex;
  border: 1px solid gray;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export function Footer() {
  return (
    <Wrapper>
      {/* use nextjs for this */}
      <div>Version number</div>

      <div>
        <ContentLinks>
          {/* use Route for this */}
          <li>Docs</li>
          <li>API</li>
          <li>Help</li>
          <li>Community</li>
        </ContentLinks>
      </div>

      <div>
        <img src={"/icons/logo-small.svg"} alt="logo" />
      </div>
    </Wrapper>
  );
}
