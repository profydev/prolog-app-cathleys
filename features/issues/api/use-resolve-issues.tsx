import axios from "axios";

export function useResolveIssues(params: { toResolveIds: string[] }) {
  const { toResolveIds } = params;
  console.log(
    "useResolveIssues- ",
    "[status to resolve]: ",
    status,
    "[toResolvedIds]: ",
    toResolveIds
  );

  return axios.patch(
    `https://prolog-api.profy.dev/v2/issue/${toResolveIds}`,
    { status: "resolved" },
    {
      headers: {
        Authorization: "4b445c570d5cab6f41933084164c426e3bb63f38",
      },
    }
  );
}
