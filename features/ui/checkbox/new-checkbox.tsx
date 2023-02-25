import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useRef,
} from "react";
import {
  Label,
  CheckboxInput,
  CheckboxDisplay,
  CheckboxText,
} from "./new-checkbox.style";

export interface MyCheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  checked?: boolean;
  indeterminate?: boolean;
  text?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const NewCheckbox = forwardRef<HTMLInputElement, MyCheckboxProps>(
  function NewCheckbox({ indeterminate = false, text, ...inputProps }, ref) {
    const internalRef = useRef<HTMLInputElement | null>(null);

    function synchronizeRefs(el: HTMLInputElement | null) {
      // Update the internal ref.
      internalRef.current = el;
      if (!ref) return;
      if (typeof ref === "object") {
        ref.current = el;
      } else {
        ref(el);
      }
    }

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <>
        <Label>
          <CheckboxInput
            ref={synchronizeRefs}
            type="checkbox"
            {...inputProps}
          />
          <CheckboxDisplay />
          <CheckboxText>{text}</CheckboxText>
        </Label>
      </>
    );
  }
);
