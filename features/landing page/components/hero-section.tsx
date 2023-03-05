import { breakpoint, color, displayFont, space, textFont } from "@styles/theme";
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

  @media (max-width: ${breakpoint("tablet")}) {
    ${displayFont("md", "semibold")};
    padding-left: ${space(4)};
    padding-right: ${space(4)};
  }
`;

export const SubHeader = styled.span`
  display: flex;
  text-align: center;
  max-width: 40.5rem;
  letter-spacing: 0.044rem;
  margin: ${space(0)};
  ${textFont("xl", "regular")};
  color: ${color("gray", 500)};
  padding-bottom: ${space(16)};

  @media (max-width: ${breakpoint("tablet")}) {
    ${textFont("lg", "regular")};
    padding-left: ${space(4)};
    padding-right: ${space(4)};
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 6.125rem;
`;

export const HeaderImage = styled.img`
  display: flex;

  @media (max-width: ${breakpoint("tablet")}) {
    width: 17.375rem;
    height: 10.875rem;
  }
`;

export function HeroPage({ children }: HeroProps) {
  return <Container>{children}</Container>;
}
