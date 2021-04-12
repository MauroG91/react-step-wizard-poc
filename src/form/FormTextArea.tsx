import React from "react";
import { Form, Label, TextArea } from "semantic-ui-react";
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
} from "react-hook-form";

interface IProps {
  name: string;
  content?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  errors: FieldErrors;
  control: Control;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
}

export default function FormTextArea({
  name,
  content,
  errors,
  required = false,
  disabled = false,
  placeholder = "--Please choose an option--",
  control,
  rules,
}: IProps) {
  return (
    <Form.Field error={!!errors[name]} required={required} disabled={disabled}>
      <label htmlFor={name}>{content}</label>
      <Controller
        name={name}
        id={name}
        control={control}
        rules={rules}
        render={({ onChange, value }) => (
          <TextArea
            value={value}
            placeholder={placeholder}
            onChange={(e, { value }) => onChange(value)}
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
