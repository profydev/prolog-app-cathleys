import { useQuery } from "react-query";
import axios from "axios";
import type { ContentPage } from "@typings/content-page.types";
import { HeroSection, SocialProofSection } from "../types/home.types";

async function getHome() {
  const { data } = await axios.get(
    "https://prolog-api.profy.dev/content-page/home"
  );
  return data;
}

export function useHero() {
  return useQuery<ContentPage<HeroSection>, Error>("home", getHome);
}
export function useSocial() {
  return useQuery<ContentPage<SocialProofSection>, Error>("home", getHome);
}
