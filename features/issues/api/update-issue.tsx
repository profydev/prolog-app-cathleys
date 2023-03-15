import axios from "axios";

export async function updateIssue(variables: {
  toResolveIds: string[];
  status: string;
}) {
  const { toResolveIds, status } = variables;
  return await axios.patch(
    `https://prolog-api.profy.dev/v2/issue/${toResolveIds.join(",")}`,
    { status },
    {
      headers: {
        Authorization: "4b445c570d5cab6f41933084164c426e3bb63f38",
      },
    }
  );
}
