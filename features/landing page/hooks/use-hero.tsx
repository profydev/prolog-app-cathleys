import { ContentPage } from "@typings/content-page.types";
import { useQuery } from "react-query";
import { HeroSection } from "../types/home.types";
import { getHome } from "../api/get-home";

export function useHero() {
  return useQuery<ContentPage<HeroSection>, Error>("home", getHome);
}
