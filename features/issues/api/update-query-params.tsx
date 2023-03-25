import router from "next/router";

export function updateQueryParams(params: Record<string, string>) {
  router.push({
    query: {
      ...router.query,
      ...params,
    },
  });
}
