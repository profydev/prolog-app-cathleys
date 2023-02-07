type optionProps = {
  value: string;
  label: string;
};

export const optionByStatus: optionProps[] = [
  { value: "", label: "--" },
  { value: "open", label: "Unresolved" },
  { value: "resolved", label: "Resolved" },
];

export const optionByLevel: optionProps[] = [
  { value: "", label: "--" },
  { value: "error", label: "Error" },
  { value: "warning", label: "Warning" },
  { value: "info", label: "Info" },
];
