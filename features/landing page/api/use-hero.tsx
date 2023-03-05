import { useQuery } from "react-query";
import axios from "axios";
import { Hero } from "../types/hero.types";

async function getHome() {
  const { data } = await axios.get(
    "https://prolog-api.profy.dev/content-page/home"
  );
  return data;
}

export function useHome() {
  return useQuery<Hero[], Error>("hero", getHome);
}
