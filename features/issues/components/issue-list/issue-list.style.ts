import { breakpoint, space, color, textFont } from "@styles/theme";
import Select from "react-select";
import styled from "styled-components";

export const WrapperStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${breakpoint("tablet")}) {
    flex-direction: column-reverse;
    flex: 1;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${space(6)};
`;

export const FilterStyle = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: ${breakpoint("tablet")}) {
    padding-bottom: ${space(4)};
  }
`;

export const Form = styled.div`
  border: none;
  padding: 0;
  background-color: white;

  @media (max-width: ${breakpoint("tablet")}) {
    width: 100%;
  }
`;

export const Input = styled.input.attrs({
  type: "search",
})`
  border: 1px solid ${color("gray", 300)};
  padding: 9px 4px 9px 40px;
  background: transparent url("/icons/search.svg") no-repeat 13px center;
  border-radius: 0.5rem;
  outline: none;

  @media (max-width: ${breakpoint("tablet")}) {
    width: 100%;
  }
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

export const Dropdown = styled(Select)`
  padding-right: ${space(4)};
  width: 10rem;

  @media (max-width: ${breakpoint("tablet")}) {
    width: 100%;
    padding-right: ${space(0)};
    padding-bottom: ${space(4)};
  }
`;

export const Container = styled.div`
  background: white;
  border: 1px solid ${color("gray", 200)};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: ${space(2)};
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const HeaderRow = styled.tr`
  border-bottom: 1px solid ${color("gray", 200)};
`;

export const HeaderCell = styled.th`
  padding: ${space(3, 6)};
  text-align: left;
  color: ${color("gray", 500)};
  ${textFont("xs", "medium")};
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space(4, 6)};
  border-top: 1px solid ${color("gray", 200)};
`;

export const PaginationButton = styled.button`
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

export const PageInfo = styled.div`
  color: ${color("gray", 700)};
  ${textFont("sm", "regular")}
`;

export const PageNumber = styled.span`
  ${textFont("sm", "medium")}
`;
