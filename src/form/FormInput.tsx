import React from "react";
import { Form, Label, Input } from "semantic-ui-react";
import {
  Controller,
  FieldErrors,
  Control,
  RegisterOptions,
} from "react-hook-form";

interface IProps {
  name: string;
  content?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  errors: FieldErrors;
  control: Control;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
}

export default function FormInput({
  name,
  content,
  errors,
  required = false,
  disabled = false,
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
          <Input onChange={(e, { value }) => onChange(value)} value={value} />
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
