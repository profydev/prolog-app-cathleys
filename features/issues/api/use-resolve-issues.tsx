import axios from "axios";

export function useResolveIssues(itemId: string[]) {
  return axios.patch(
    `https://prolog-api.profy.dev/v2/issue/${itemId}`,
    {
      status: "resolved",
    },
    {
      headers: {
        Authorization: "access-token",
      },
    }
  );
}
