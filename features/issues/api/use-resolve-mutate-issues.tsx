import { useMutation, useQueryClient } from "react-query";
import { updateResolveIssueIds } from "./update-resolve-issue-ids";
import { Issue } from "@features/issues/types/issue.types";

export function useResolveMutateIssues() {
  const queryClient = useQueryClient();
  return useMutation(updateResolveIssueIds, {
    onMutate: async (variables) => {
      const { toResolveIds, status } = variables;
      await queryClient.cancelQueries(["issues", status]);

      const previousData = queryClient.getQueryData<{ items: Issue[] }>([
        "issues",
        status,
      ]);

      if (!previousData) return;
      // Update the cache with the resolved issues
      const newData = previousData.items.map((issue) => {
        if (toResolveIds.includes(issue.id)) {
          return {
            ...issue,
            status,
          };
        } else {
          return issue;
        }
      }) as Issue[];

      queryClient.setQueryData<{ items: Issue[] }>(["issues", status], {
        items: newData,
      });

      return { previousData };
    },
    onSuccess: (_, variables) => {
      const { status } = variables;
      queryClient.invalidateQueries(["issues", status]);
      queryClient.invalidateQueries("issues");
    },

    onError: (error) => {
      console.error(error);
      queryClient.cancelQueries(["issues", status]);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["issues", status]);
    },
  });
}
