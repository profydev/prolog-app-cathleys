import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;

  width: 109px;
  height: 40px;
  background-color: #7f56d9;

  border: 1px solid #7f56d9;

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
`;

type Button = {
  label: string;
  backgroundColor: string;
  size: "sm";
};
