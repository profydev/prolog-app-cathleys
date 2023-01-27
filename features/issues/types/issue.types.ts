import { ProjectLanguage } from "@features/projects";

export enum IssueStatus {
  Unresolved = "open",
  Resolved = "resolved",
}

export enum IssueLevel {
  info = "info",
  warning = "warning",
  error = "error",
}

interface ProjectName {
  [ProjectLanguage.react]: "frontend - web";
  [ProjectLanguage.node]: "backend";
  [ProjectLanguage.python]: "ml service";
}

export type Issue = {
  id: string;
  projectId: string;
  name: string;
  message: string;
  stack: string;
  status: IssueStatus;
  level: IssueLevel;
  numEvents: number;
  numUsers: number;
  project: ProjectName;
};
