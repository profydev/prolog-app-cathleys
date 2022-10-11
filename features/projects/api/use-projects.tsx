import { useQuery } from "react-query";
import axios from "axios";
import { Project } from "../types/project.types";

const URL = "https://prolog-api.profy.dev/project";

async function getProjects() {
  const { data } = await axios.get(URL);

  return data;
}

export function useProjects() {
  return useQuery<Project[], Error>("projects", getProjects);
}
