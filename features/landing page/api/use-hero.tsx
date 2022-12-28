import { useQuery } from "react-query";
import axios from "axios";
import { Hero } from "../types/hero.types";

const URL = "https://prolog-api.profy.dev/content-page/home";

async function getHero() {
  const { data } = await axios.get(URL);
  return data;
}

export function useHero() {
  return useQuery<Hero[], Error>(["Hero"], getHero);
}
