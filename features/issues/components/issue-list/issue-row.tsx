import styled from "styled-components";
import { color, space, textFont } from "@styles/theme";
import * as F from "@features/ui";
import { IssueLevel } from "../../types/issue.types";
import { ProjectLanguage } from "@features/projects";
import type { Issue } from "../../types/issue.types";
type IssueRowProps = {
  projectLanguage: ProjectLanguage;
  issue: Issue;
};

const levelColors = {
  [IssueLevel.info]: F.BadgeColor.success,
  [IssueLevel.warning]: F.BadgeColor.warning,
  [IssueLevel.error]: F.BadgeColor.error,
};
const levelWords = {
  [IssueLevel.info]: "Stable",
  [IssueLevel.warning]: "Warning",
  [IssueLevel.error]: "Critical",
};

export const Row = styled.tr`
  &:nth-child(2n) {
    background: ${color("gray", 50)};
  }
`;

export const Cell = styled.td`
  padding: ${space(4, 6)};
  color: ${color("gray", 500)};
  ${textFont("sm", "regular")}
`;

export const IssueCell = styled(Cell)`
  display: flex;
  align-items: center;
`;

const LanguageIcon = styled.img`
  width: ${space(10)};
  margin-right: ${space(3)};
`;

const ErrorTypeAndMessage = styled.div`
  color: ${color("gray", 900)};
`;

const ErrorType = styled.span`
  ${textFont("sm", "medium")}
`;

export function IssueRow({ projectLanguage, issue }: IssueRowProps) {
  const { name, message, stack, level, numEvents, numUsers } = issue;
  const firstLineOfStackTrace = stack.split("\n")[1];
  return (
    <Row>
      <IssueCell>
        <LanguageIcon
          src={`/icons/${projectLanguage}.svg`}
          alt={projectLanguage}
        />
        <div>
          <ErrorTypeAndMessage>
            <ErrorType>{name}:&nbsp;</ErrorType>
            {message}
          </ErrorTypeAndMessage>
          <div>{firstLineOfStackTrace}</div>
        </div>
      </IssueCell>
      <Cell>
        <F.Badge color={levelColors[level]} size={F.BadgeSize.sm}>
          {levelWords[level]}
        </F.Badge>
      </Cell>
      <Cell>{numEvents}</Cell>
      <Cell>{numUsers}</Cell>
    </Row>
  );
}
