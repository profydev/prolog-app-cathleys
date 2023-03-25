import axios from "axios";
import { IssueStatus } from "../types/issue.types";

export async function updateResolveIssueIds(variables: {
  toResolveIds: string[];
  status: IssueStatus;
}) {
  const { toResolveIds, status } = variables;
  return await axios.patch(
    `https://prolog-api.profy.dev/v2/issue/${toResolveIds}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
      },
    }
  );
}
