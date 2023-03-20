import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDebouncedCallback } from "use-debounce";
import {
  IssueStatus,
  optionByLevel,
  optionByStatus,
  useIssues,
  useResolveMutateIssues,
} from "@features/issues";
import { ProjectLanguage, useProjects } from "@features/projects";
import * as I from "./issue-list.style";
import * as C from "@features/ui";
import { IssueRow } from "./issue-row";
import { LoadingScreen } from "@features/projects/components/loading-screen";
import { ErrorPage } from "@features/projects/components/error-page";

export function IssueList() {
  const router = useRouter();
  const [projectSearch, setProjectSearch] = useState("");
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
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
      setCheckedItems(new Set((items || []).map((item) => item.id)));
    } else {
      setCheckedItems(new Set());
    }
  };

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
  const resolveIssueId = useResolveMutateIssues();

  if (issuesPage.isLoading) {
    return <LoadingScreen />;
  }

  if (issuesPage.isError) {
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
          <C.ButtonHeaderIcon
            icon={C.ButtonIcons.leading}
            iconSrc={"/icons/check.svg"}
            label="Resolve selected issues"
            color={C.ButtonColor.primary}
            size={C.ButtonSize.sm}
            onClick={() => {
              const checkedIds = Array.from(checkedItems);
              resolveIssueId.mutate({
                toResolveIds: checkedIds,
                status: IssueStatus.resolved,
              });
              setCheckedItems(new Set());
            }}
          />
        </I.Box>

        <I.FilterStyle>
          <I.Dropdown
            classNamePrefix="status"
            instanceId="status-dropdown-value"
            options={optionByStatus}
            placeholder="Status"
            styles={C.customStyles}
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
            styles={C.customStyles}
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
                <C.NewCheckbox
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
              <IssueRow
                key={issue.id}
                issue={issue}
                projectLanguage={projectIdToLanguage[issue.projectId]}
                checked={checkedItems.has(issue.id)}
                onChange={() => handleCheckbox(issue.id)}
              />
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
