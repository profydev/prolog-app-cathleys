import React, { useState } from "react";
import Select from "react-select";
import { color, textFont } from "@styles/theme";
import styled from "styled-components";

type SelectProps = {
  options: { value: string; label: string }[];
  placeholder: string;
  isDisabled: boolean;
  isSearchable: boolean;
  isClearable: boolean;
  hint?: string;
};

const ErrorMessage = styled.p`
  color: ${color("error", 500)};
  ${textFont("sm", "regular")};
  margin-top: "6px";
`;

const customStyles = {
  option: (defaultStyles: any, state: { isSelected: boolean }) => ({
    ...defaultStyles,
    color: `${color("gray", 900)}`,
    cursor: "pointer",
    backgroundColor: state.isSelected ? `${color("primary", 25)}` : "#fff",
  }),

  control: (defaultStyles: any, state: { isFocused: boolean }) => ({
    ...defaultStyles,
    backgroundColor: "#fff",
    border: state.isFocused
      ? `1px solid ${color("primary", 300)}`
      : `1px solid ${color("gray", 300)}`,
    borderRadius: "0.5rem",
    boxShadow: state.isFocused
      ? "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF"
      : "none",
  }),

  menu: (defaultStyles: any) => ({
    ...defaultStyles,
    paddingLeft: "0.825rem",
    boxShadow:
      "0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)",
  }),

  singleValue: (defaultStyles: any) => ({
    ...defaultStyles,
    color: `${color("gray", 900)}`,
  }),

  indicatorSeparator: (defaultStyles: any) => ({
    ...defaultStyles,
    display: "none",
  }),
};

export function UiSelect({
  options,
  placeholder,
  isDisabled,
  isSearchable,
  hint,
}: SelectProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (selectedOption: any) => {
    setValue(selectedOption);
    setError(false);
  };

  const handleBlur = () => {
    if (!value) {
      setError(true);
    }
  };

  const Option = (props: any) => {
    return <div {...props.innerProps}>{props.data.label}</div>;
  };

  return (
    <>
      {hint}
      <Select
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        onChange={handleChange}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        onBlur={handleBlur}
        components={{ Option }}
        isClearable
      />
      {error && <ErrorMessage>Please select an option</ErrorMessage>}
    </>
  );
}
