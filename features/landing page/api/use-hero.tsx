import { useQuery } from "react-query";
import axios from "axios";
import { Hero } from "../types/hero.types";

async function getHero() {
  const { data } = await axios.get(
    "https://prolog-api.profy.dev/content-page/home"
  );
  return data;
}

export function useHero() {
  return useQuery<Hero[], Error>("hero", getHero);
}
