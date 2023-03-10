import styled from "styled-components";
import { breakpoint, color, displayFont, space, textFont } from "@styles/theme";
import { LoadingScreen } from "@features/projects/components/loading-screen";
import { useHero } from "../hooks/use-hero";

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
  max-width: 40.5rem;
  color: ${color("gray", 500)};
  padding-bottom: ${space(16)};
  letter-spacing: 0.044rem;
  ${textFont("xl", "regular")};

  @media (max-width: ${breakpoint("tablet")}) {
    letter-spacing: normal;
    ${textFont("lg", "regular")};
    padding-left: ${space(4)};
    padding-right: ${space(4)};
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakpoint("desktop")}) {
    padding-bottom: ${space(16)};
  }
`;

export const HeaderImage = styled.img`
  display: flex;

  @media (max-width: ${breakpoint("mobile")}) {
    width: 17.375rem;
    height: 10.875rem;
    transform: scale(0.8);
    transition: transform 0.7s linear;
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
              data-cy="hero-image"
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
