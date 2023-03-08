import { ContentPage } from "@typings/content-page.types";
import { useQuery } from "react-query";
import { getHome } from "../api/get-home";
import { TestimonialSection } from "../types/home.types";

export function useTestimonial() {
  return useQuery<ContentPage<TestimonialSection>, Error>("home", getHome);
}
