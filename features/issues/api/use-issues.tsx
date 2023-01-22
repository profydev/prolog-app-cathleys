import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import type { Page } from "@typings/page.types";
import { Issue } from "../types/issue.types";

async function getIssues(page: number, status: string) {
  const { data } = await axios.get(
    `https://prolog-api.profy.dev/issue?page=${page}&status=${status}`
  );

  return data;
}

export function useIssues(page: number, optionStatus: string) {
  const query = useQuery<Page<Issue>, Error>(
    ["issues", page, optionStatus],
    () => getIssues(page, optionStatus),
    { keepPreviousData: true, staleTime: 60000 }
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();

  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      queryClient.prefetchQuery(["projects", page + 1], () =>
        getIssues(page + 1, optionStatus)
      );
    }
  }, [query.data, page, queryClient]);

  return query;
}
