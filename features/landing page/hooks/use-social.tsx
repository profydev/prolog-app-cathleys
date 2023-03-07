import { ContentPage } from "@typings/content-page.types";
import { useQuery } from "react-query";
import { getHome } from "../api/get-home";
import { SocialProofSection } from "../types/home.types";

export function useSocial() {
  return useQuery<ContentPage<SocialProofSection>, Error>("home", getHome);
}
