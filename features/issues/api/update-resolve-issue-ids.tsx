import axios from "axios";
import { IssueStatus } from "../types/issue.types";

export async function updateResolveIssueIds(variables: {
  toResolveIds: string[];
  status: IssueStatus.resolved;
}) {
  const { toResolveIds, status } = variables;
  return await axios.patch(
    `https://prolog-api.profy.dev/v2/issue/${toResolveIds}`,
    { status },
    {
      headers: {
        Authorization: "4b445c570d5cab6f41933084164c426e3bb63f38",
      },
    }
  );
}
