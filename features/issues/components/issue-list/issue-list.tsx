import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import Select from "react-select";
import styled from "styled-components";
import { useIssues } from "@features/issues";
import { ProjectLanguage, useProjects } from "@features/projects";
import { color, space, textFont } from "@styles/theme";
import { IssueRow } from "./issue-row";
import * as F from "@features/ui";
import { customStyles } from "@features/ui";
import * as B from "@features/ui/button-header/button-header-icon";
import { LoadingScreen } from "@features/projects/components/loading-screen";
import { ErrorPage } from "@features/projects/components/error-page";
import {
  optionByLevel,
  optionByStatus,
} from "@features/issues/api/select-issues-data";

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1.563rem;
`;

const FilterStyle = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Form = styled.div`
  border: none;
  padding: 0;
  background-color: white;
`;
const Input = styled.input.attrs({
  type: "search",
})`
  width: 260px;
  border: 1px solid ${color("gray", 300)};
  display: block;
  padding: 9px 4px 9px 40px;
  background: transparent url("/icons/search.svg") no-repeat 13px center;
  border-radius: 0.5rem;
  outline: none;

  ::placeholder {
    color: ${color("gray", 500)};
    ${textFont("md", "regular")};
  }

  &:focus {
    border: 1px solid ${color("primary", 300)};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
      0px 0px 0px 4px ${color("primary", 100)};
  }
`;

const Dropdown = styled(Select)`
  padding-right: ${space(4)};
  width: 10rem;
`;

const Container = styled.div`
  background: white;
  border: 1px solid ${color("gray", 200)};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: ${space(2)};
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderRow = styled.tr`
  border-bottom: 1px solid ${color("gray", 200)};
`;

const HeaderCell = styled.th`
  padding: ${space(3, 6)};
  text-align: left;
  color: ${color("gray", 500)};
  ${textFont("xs", "medium")};
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space(4, 6)};
  border-top: 1px solid ${color("gray", 200)};
`;

const PaginationButton = styled.button`
  height: 38px;
  padding: ${space(0, 4)};
  background: white;
  border: 1px solid ${color("gray", 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;

  &:not(:first-of-type) {
    margin-left: ${space(3)};
  }
`;

const PageInfo = styled.div`
  color: ${color("gray", 700)};
  ${textFont("sm", "regular")}
`;

const PageNumber = styled.span`
  ${textFont("sm", "medium")}
`;

export function IssueList() {
  const router = useRouter();
  const { status, level, project } = router.query;

  const statusQueryParam = Array.isArray(status) ? status[0] : status ?? "";
  const levelQueryParam = Array.isArray(level) ? level[0] : level ?? "";
  const projectQueryParam = Array.isArray(project) ? project[0] : project ?? "";
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [projectSearch, setProjectSearch] = useState("");

  useEffect(() => {
    if (statusQueryParam) setSelectedStatus(statusQueryParam);
    if (levelQueryParam) setSelectedLevel(levelQueryParam);
    if (projectQueryParam) setProjectSearch(projectQueryParam);
  }, [statusQueryParam, levelQueryParam, projectQueryParam]);

  const debouncedSearch = useDebouncedCallback((value: any) => {
    router.push({
      query: {
        ...router.query,
        project: value,
      },
    });
  }, 300);

  const handleStatusChange = (optionByStatus: any) => {
    setSelectedStatus(optionByStatus.value);

    router.push({
      query: {
        ...router.query,
        status: optionByStatus.value,
      },
    });
  };
  const handleLevelChange = (optionByLevel: any) => {
    setSelectedLevel(optionByLevel.value);
    router.push({
      query: {
        ...router.query,
        level: optionByLevel.value,
      },
    });
  };
  const handleSearchProject = (e: { target: { value: string } }) => {
    const searchValue = e.target.value.toLowerCase();
    setProjectSearch(searchValue);
    debouncedSearch(searchValue);
  };

  const page = Number(router.query.page || 1);
  const navigateToPage = (newPage: number) =>
    router.push({
      pathname: router.pathname,
      query: { page: newPage },
    });

  const issuesPage = useIssues(
    page,
    selectedStatus,
    selectedLevel,
    projectSearch
  );
  const projects = useProjects();

  if (issuesPage.isLoading || projects.isLoading) {
    return <LoadingScreen />;
  }

  if (issuesPage.isError) {
    console.error(issuesPage.error);
    return <ErrorPage />;
  }

  const projectIdToLanguage = (projects.data || []).reduce(
    (prev: any, project: { id: any; language: any }) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>
  );
  const { items, meta } = issuesPage.data || {};

  return (
    <>
      <WrapperStyle>
        <Box>
          <F.ButtonHeader
            size={F.ButtonSize.md}
            color={F.ButtonColor.primary}
            href=""
          >
            <B.ButtonwithIcon
              iconSrc="/icons/check.svg"
              icon={B.ButtonIcons.leading}
              label="Resolve selected issues"
            />
          </F.ButtonHeader>
        </Box>

        <FilterStyle>
          <Dropdown
            instanceId="status-dropdown-value"
            options={optionByStatus}
            placeholder="Status"
            styles={customStyles}
            onChange={handleStatusChange}
            blurInputOnSelect={true}
            {...(selectedStatus && {
              value: optionByStatus.find((o) => o.value === selectedStatus),
            })}
          />

          <Dropdown
            instanceId="level-dropdown-value"
            options={optionByLevel}
            placeholder="Level"
            styles={customStyles}
            onChange={handleLevelChange}
            blurInputOnSelect={true}
            {...(selectedLevel && {
              value: optionByLevel.find((o) => o.value === selectedLevel),
            })}
          />
          <Form>
            <Input
              id="search"
              type="search"
              placeholder="Project Name"
              onChange={handleSearchProject}
              value={projectSearch}
            />
          </Form>
        </FilterStyle>
      </WrapperStyle>
      <Container>
        <Table>
          <thead>
            <HeaderRow>
              <HeaderCell>Issue</HeaderCell>
              <HeaderCell>Level</HeaderCell>
              <HeaderCell>Events</HeaderCell>
              <HeaderCell>Users</HeaderCell>
            </HeaderRow>
          </thead>
          <tbody>
            {(items || []).map((issue) => (
              <IssueRow
                key={issue.id}
                issue={issue}
                projectLanguage={projectIdToLanguage[issue.projectId]}
              />
            ))}
          </tbody>
        </Table>
        <PaginationContainer>
          <div>
            <PaginationButton
              onClick={() => navigateToPage(page - 1)}
              disabled={page === 1}
              data-cy="Previous"
            >
              Previous
            </PaginationButton>
            <PaginationButton
              onClick={() => navigateToPage(page + 1)}
              disabled={page === meta?.totalPages}
            >
              Next
            </PaginationButton>
          </div>
          <PageInfo>
            Page <PageNumber>{meta?.currentPage}</PageNumber> of{" "}
            <PageNumber>{meta?.totalPages}</PageNumber>
          </PageInfo>
        </PaginationContainer>
      </Container>
    </>
  );
}
