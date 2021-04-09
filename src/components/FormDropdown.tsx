import React from "react";
import { Form, Label, Dropdown } from "semantic-ui-react";
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
} from "react-hook-form";

export interface ISelectOption {
  key: string;
  value: string;
  text: string;
}

interface IProps {
  name: string;
  content: string;
  required?: boolean;
  disabled?: boolean;
  options: ISelectOption[];
  placeholder?: string;
  errors: FieldErrors;
  control: Control;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
}

export default function FormDropdown({
  name,
  content,
  errors,
  disabled = false,
  required = false,
  options,
  placeholder = "--Please choose an option--",
  control,
}: IProps) {
  return (
    <Form.Field error={!!errors[name]} required={required} disabled={disabled}>
      <label htmlFor={name}>{content}</label>
      <Controller
        name={name}
        id={name}
        control={control}
        render={({ onChange, value }) => (
          <Dropdown
            selection
            placeholder={placeholder}
            options={options}
            onChange={(e, { value }) => onChange(value)}
            value={value}
          />
        )}
      />
      {!!errors[name] && (
        <Label pointing prompt color="red">
          {errors[name].message}
        </Label>
      )}
    </Form.Field>
  );
}
