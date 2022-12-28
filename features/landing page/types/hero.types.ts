export enum HeroPageSection {
  hero = "hero",
}

type Image = {
  src: string;
  width: number;
  height: number;
};

export type Hero = {
  sectionType: HeroPageSection;
  title: string;
  subtitle: string;
  image: Image;
};
