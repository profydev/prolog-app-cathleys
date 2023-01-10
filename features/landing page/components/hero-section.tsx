import { color, displayFont, space, textFont } from "@styles/theme";
import styled from "styled-components";

type HeroProps = {
  children: React.ReactNode;
};

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: ${space(6)};
  background-color: ${color("gray", 50)};
`;

export const Title = styled.h1`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: ${space(0)};
  padding-top: ${space(24)};
  padding-bottom: ${space(6)};
  ${displayFont("xl", "semibold")};
`;

export const Subtitle = styled.span`
  text-align: center;
  letter-spacing: 0.044rem;
  width: 41rem;
  margin: ${space(0)};
  ${textFont("xl", "regular")};
  color: ${color("gray", 500)};
  padding-bottom: ${space(16)};
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 6.125rem;
`;

export function HeroPage({ children }: HeroProps) {
  return <Container>{children}</Container>;
}
