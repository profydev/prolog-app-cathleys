export enum SectionType {
  hero = "hero",
  socialProof = "social-proof",
  testimonials = "testimonials",
}

export enum Theme {
  lightGray = "lightGray",
}

export type ImageResolution = {
  src: string;
  width: number;
  height: number;
};

export type HeroSection = {
  sectionType: SectionType.hero;
  title: string;
  subtitle: string;
  image: ImageResolution;
  theme: Theme;
};

export type SocialProofCompany = [
  {
    name: string;
    logo: string;
  }
];

export type SocialProofSection = {
  sectionType: SectionType.socialProof;
  title: string;
  subtitle: string;
  image: ImageResolution;
  theme: Theme;
  companies: SocialProofCompany;
};

export type Testimonial = {
  title: string;
  text: string;
  userName: string;
  userRole: string;
  userCompany: string;
  userImage: ImageResolution;
};

export type TestimonialSection = {
  sectionType: SectionType;
  title: string;
  subtitle: string;
  testimonials: Testimonial;
  theme: Theme;
};
