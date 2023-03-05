import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Issue, useIssues, useResolveIssues } from "@features/issues";
import { ProjectLanguage, useProjects } from "@features/projects";
import { IssueRow } from "./issue-row";
import * as I from "./issue-list.style";
import { customStyles, NewCheckbox } from "@features/ui";
import { LoadingScreen } from "@features/projects/components/loading-screen";
import { ErrorPage } from "@features/projects/components/error-page";
import {
  optionByLevel,
  optionByStatus,
} from "@features/issues/api/select-issues-data";
import styled from "styled-components";
import { color } from "@styles/theme";
import { useMutation, useQueryClient } from "react-query";

const Button = styled.button`
  background-color: ${color("primary", 600)};
  outline: none;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  &:hover {
    background-color: ${color("primary", 700)};
  }
`;
export function IssueList() {
  const router = useRouter();
  const [projectSearch, setProjectSearch] = useState("");
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [theIssues, setIssues] = useState<Issue[]>([]);
  const queryClient = useQueryClient();
  const debouncedSearch = useDebouncedCallback((value) => {
    router.push({
      query: {
        ...router.query,
        project: value,
      },
    });
  }, 300);

  const { status, level, project } = router.query;
  const statusParam = Array.isArray(status) ? status[0] : status ?? "";
  const levelParam = Array.isArray(level) ? level[0] : level ?? "";
  const projectParam = Array.isArray(project) ? project[0] : project ?? "";

  const handleStatusChange = (optionByStatus: any) => {
    router.push({
      query: {
        ...router.query,
        status: optionByStatus.value,
      },
    });
  };

  const handleLevelChange = (optionByLevel: any) => {
    router.push({
      query: {
        ...router.query,
        level: optionByLevel.value,
      },
    });
  };

  const handleSearchProject = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setProjectSearch(searchValue);
    debouncedSearch(searchValue);
  };

  const handleCheckbox = (id: string) => {
    const newCheckedItems = new Set(checkedItems);

    if (checkedItems.has(id)) {
      newCheckedItems.delete(id);
      setCheckedItems(newCheckedItems);
    } else {
      newCheckedItems.add(id);
      setCheckedItems(newCheckedItems);
    }
  };

  const handleToggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).checked) {
      setCheckedItems(new Set((items || []).map(({ id }) => id)));
    } else {
      setCheckedItems(new Set());
    }
  };
  //this is where it starts

  console.log("queryClient", queryClient);

  const resolveCheckedItems = useMutation(useResolveIssues, {
    onMutate: async (checkedIds: string[]) => {
      await queryClient.cancelQueries(["issues", page, status, level, project]);

      const prevItems = queryClient.getQueryData<{ items: Issue[] }>([
        "issues",
        page,
        status,
        level,
        project,
      ]);
      if (!prevItems) {
        console.log("prevItems is undefined");
        return;
      }

      const updatedItems = prevItems?.items.filter(
        (item) => !checkedIds.includes(item.id)
      );

      console.log("onmutate-updatedItems", updatedItems);

      queryClient.setQueryData(["issues", page, status, level, project], {
        items: updatedItems,
      });

      return { prevItems };
    },
    onError: (err, checkedIds, context) => {
      queryClient.setQueryData(
        ["issues", page, status, level, project],
        context?.prevItems
      );
      console.log("onError");
    },
    onSettled: () => {
      queryClient.invalidateQueries(["issues", page, status, level, project]);
      console.log("onSettled");
    },
  });

  //this is where it ends

  const page = Number(router.query.page || 1);
  const navigateToPage = (newPage: number) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: newPage },
    });
  };

  useEffect(() => {
    if (projectParam) setProjectSearch(projectParam);
    if (page) setCheckedItems(new Set());
  }, [projectParam, page]);

  const issuesPage = useIssues(page, statusParam, levelParam, projectParam);
  const projects = useProjects();

  if (issuesPage.isLoading || projects.isLoading) {
    return <LoadingScreen />;
  }

  if (issuesPage.isError || projects.isError) {
    console.error(issuesPage.error);
    return <ErrorPage />;
  }

  const { items, meta } = issuesPage.data || {};
  const projectIdToLanguage = (projects.data || []).reduce(
    (prev: any, project: { id: any; language: any }) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>
  );

  return (
    <>
      <I.WrapperStyle>
        <I.Box>
          <Button
            onClick={() => {
              const checkedIds = Array.from(checkedItems);

              resolveCheckedItems.mutate(checkedIds);

              console.log("onclick-check ids", checkedIds);
            }}
          >
            Resolve Issues
          </Button>
        </I.Box>

        <I.FilterStyle>
          <I.Dropdown
            classNamePrefix="status"
            instanceId="status-dropdown-value"
            options={optionByStatus}
            placeholder="Status"
            styles={customStyles}
            onChange={handleStatusChange}
            isSearchable={false}
            blurInputOnSelect={true}
            {...{ value: optionByStatus.find((o) => o.value === status) }}
          />

          <I.Dropdown
            classNamePrefix="level"
            instanceId="level-dropdown-value"
            options={optionByLevel}
            placeholder="Level"
            styles={customStyles}
            onChange={handleLevelChange}
            isSearchable={false}
            blurInputOnSelect={true}
            {...{ value: optionByLevel.find((o) => o.value === level) }}
          />
          <I.Form>
            <I.Input
              data-cy="search bar"
              id="search"
              type="search"
              placeholder="Project Name"
              onChange={handleSearchProject}
              value={projectSearch}
            />
          </I.Form>
        </I.FilterStyle>
      </I.WrapperStyle>
      <I.Container>
        <I.Table>
          <I.TableHead>
            <I.HeaderRow>
              <I.HeaderCell>
                <NewCheckbox
                  checked={checkedItems.size === items?.length}
                  indeterminate={
                    checkedItems.size > 0 &&
                    checkedItems.size < (items?.length || [])
                  }
                  onChange={handleToggleAll}
                  text="Issue"
                />
              </I.HeaderCell>
              <I.HeaderCell>Level</I.HeaderCell>
              <I.HeaderCell>Events</I.HeaderCell>
              <I.HeaderCell>Users</I.HeaderCell>
            </I.HeaderRow>
          </I.TableHead>

          <I.TableBody data-cy="tbody">
            {(items || []).map((issue) => (
              <>
                {
                  <IssueRow
                    key={issue.id}
                    issue={issue}
                    projectLanguage={projectIdToLanguage[issue.projectId]}
                    checked={checkedItems.has(issue.id)}
                    onChange={() => handleCheckbox(issue.id)}
                    disabled={issue.status === "resolved"}
                  />
                }
              </>
            ))}
          </I.TableBody>
        </I.Table>
        <I.PaginationContainer>
          <div>
            <I.PaginationButton
              onClick={() => navigateToPage(page - 1)}
              disabled={page === 1}
              data-cy="Previous"
            >
              Previous
            </I.PaginationButton>
            <I.PaginationButton
              onClick={() => navigateToPage(page + 1)}
              disabled={page === meta?.totalPages}
            >
              Next
            </I.PaginationButton>
          </div>
          <I.PageInfo>
            Page <I.PageNumber>{meta?.currentPage}</I.PageNumber> of{" "}
            <I.PageNumber>{meta?.totalPages}</I.PageNumber>
          </I.PageInfo>
        </I.PaginationContainer>
      </I.Container>
    </>
  );
}
