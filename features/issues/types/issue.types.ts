export enum IssueStatus {
  Unresolved = "open",
  Resolved = "resolved",
}

export enum IssueLevel {
  info = "info",
  warning = "warning",
  error = "error",
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
};
