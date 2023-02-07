import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useEffect } from "react";
import type { Page } from "@typings/page.types";
import type { Issue } from "../types/issue.types";

async function getIssues(
  page: number,
  status: string,
  level: string,
  project: string
) {
  const { data } = await axios.get(
    `https://prolog-api.profy.dev/issue?page=${page}&status=${status}&level=${level}&project=${project}`
  );

  return data;
}

export function useIssues(
  page: number,
  selectedStatus: string,
  selectedLevel: string,
  projectSearch: string
) {
  const query = useQuery<Page<Issue>, Error>(
    ["issues", page, selectedStatus, selectedLevel, projectSearch],
    () => getIssues(page, selectedStatus, selectedLevel, projectSearch),
    { keepPreviousData: true, staleTime: 60000 }
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      queryClient.prefetchQuery(["projects", page + 1], () =>
        getIssues(page + 1, selectedStatus, selectedLevel, projectSearch)
      );
    }
  }, [
    query.data,
    page,
    selectedStatus,
    selectedLevel,
    projectSearch,
    queryClient,
  ]);

  return query;
}
