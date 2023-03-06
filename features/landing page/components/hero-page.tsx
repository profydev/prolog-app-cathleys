import styled from "styled-components";
import { breakpoint, color, displayFont, space, textFont } from "@styles/theme";
import { HeroSection } from "../types/home.types";
import { useHero } from "../api/use-home";
import { LoadingScreen } from "@features/projects/components/loading-screen";

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

export const SupportingText = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: ${space(0)};
  max-width: 40.5rem;
  color: ${color("gray", 500)};
  padding-bottom: ${space(16)};
  letter-spacing: normal;
  ${textFont("lg", "regular")};
  padding-left: ${space(4)};
  padding-right: ${space(4)};

  @media (min-width: ${breakpoint("desktop")}) {
    letter-spacing: 0.044rem;
    ${textFont("xl", "regular")};
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

export function HeroPage() {
  const heroSection = useHero();

  if (heroSection.isLoading) return <LoadingScreen />;

  if (heroSection.isError) {
    return <p>error</p>;
  }

  const { sections } = heroSection.data || {};

  const findHero = sections?.find((el) => {
    return el.sectionType === "hero";
  });

  return (
    <>
      {findHero && (
        <Container style={{ background: findHero.theme }}>
          <Title>{findHero.title}</Title>
          <SupportingText>{findHero.subtitle}</SupportingText>
          <Image>
            <HeaderImage
              src={`https://prolog-api.profy.dev/${findHero.image.src}`}
              width={findHero.image.width}
              height={findHero.image.height}
              alt={findHero.sectionType}
            />
          </Image>
        </Container>
      )}
    </>
  );
}
