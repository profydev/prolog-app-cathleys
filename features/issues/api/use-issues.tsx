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
  const { data } = await axios.get("https://prolog-api.profy.dev/v2/issue", {
    params: { page, status, level, project },
    headers: { Authorization: `Bearer ${process.env.SECRET_KEY}` },
  });

  return data;
}

export function useIssues(
  page: number,
  status: string,
  level: string,
  project: string
) {
  const query = useQuery<Page<Issue>, Error>(
    ["issues", page, status, level, project],
    () => getIssues(page, status, level, project),
    { keepPreviousData: true, staleTime: 60000 }
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      queryClient.prefetchQuery(["issues", page + 1], () =>
        getIssues(page + 1, status, level, project)
      );
    }
  }, [query.data, page, status, level, project, queryClient]);

  return query;
}
