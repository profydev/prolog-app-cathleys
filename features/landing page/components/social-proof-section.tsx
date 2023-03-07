import React from "react";
import styled from "styled-components";
import { color, breakpoint, textFont, space } from "@styles/theme";
import { useSocial } from "../hooks/use-social";

const SocialSection = styled.div`
  box-sizing: border-box;
  display: block;
  padding: ${space(16)} 0;
  background-color: ${color("gray", 50)};

  @media (max-width: ${breakpoint("mobile")}) {
    background-color: white;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SocialHeader = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: ${space(10)};
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${space(8)};

  @media (max-width: ${breakpoint("mobile")}) {
    justify-content: center;
    gap: unset;
  }
`;
const SocialIcons = styled.img`
  display: flex;

  @media (max-width: ${breakpoint("mobile")}) {
    padding-bottom: ${space(8)};
    width: 9.625rem;
    height: 2.125rem;
  }

  @media (min-width: ${breakpoint("desktop")}) {
    &:nth-child(6) {
      display: none;
    }
  }
`;

export function SocialProof() {
  const social = useSocial();

  const { sections } = social.data || {};
  const findSocial = sections?.find((el) => el.sectionType === "social-proof");

  return (
    <SocialSection>
      {findSocial && (
        <Container>
          <SocialHeader>{findSocial.title}</SocialHeader>

          <Wrapper>
            {findSocial?.companies?.map((item) => (
              <SocialIcons
                key={item.name}
                src={`https://prolog-api.profy.dev/${item.logo}`}
                alt={item.name}
              />
            ))}
          </Wrapper>
        </Container>
      )}
    </SocialSection>
  );
}
