import React from "react";
import { color, space, textFont } from "@styles/theme";
import styled from "styled-components";

export const Button = styled.button`
  width: fit-content;
  border: none;
  letter-spacing: 0.044rem;
  padding: ${space(2)} 0.875rem;
  background: ${color("primary", 600)};
  color: white;
  border-radius: 0.5rem;
  ${textFont("sm", "medium")};
`;
