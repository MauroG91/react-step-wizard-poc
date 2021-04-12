import React, { useState } from "react";
import { Form, Label, List, Checkbox, Icon, Input } from "semantic-ui-react";
import { Controller } from "react-hook-form";
// import RequiredAsterisk from "../../atoms/RequiredAsterisk";
import styles from "./FormListSelect.module.scss";

export interface ISelectOption {
  key: string;
  value: string;
  text: string;
}

interface IProps {
  name: string;
  content: any;
  errors: any;
  required?: boolean;
  options: ISelectOption[];
  control: any;
  multiSelect?: boolean;
  avatar?: boolean;
  search?: boolean;
  rules?: any;
}

export default function FormListSelect({
  name,
  content,
  errors,
  required = false,
  options,
  rules,
  control,
  multiSelect = false,
  avatar = false,
  search = false,
}: IProps) {
  const [searchValue, setSearchValue] = useState("");

  const deleteIcon = (
    <Icon name="delete" link onClick={() => setSearchValue("")} />
  );
  const searchIcon = <Icon name="search" />;

  function handleChange(
    onChange: Function,
    selectedValue: any,
    existingValue: any
  ) {
    if (multiSelect) {
      let newValue;
      if (existingValue?.includes(selectedValue)) {
        newValue = existingValue.filter((item: any) => item !== selectedValue);
        // An empty array will still evaluate true for validation rules so we set to null
        if (newValue.length < 0) newValue = null;
      } else {
        newValue = existingValue
          ? [...existingValue, selectedValue]
          : [selectedValue];
      }
      onChange(newValue);
    } else {
      onChange(selectedValue);
    }
  }
  return (
    <Form.Field error={!!errors[name]} required={required}>
      <Controller
        name={name}
        id={name}
        control={control}
        rules={rules}
        render={({ onChange, value }) => (
          <List
            selection
            divided
            relaxed="very"
            verticalAlign="middle"
            size="big"
          >
            <List.Item>
              <List.Content className={styles.listContent}>
                {content}
                {/* {required && <RequiredAsterisk />} */}
              </List.Content>
            </List.Item>
            {search && (
              <List.Item>
                <List.Content>
                  <Input
                    iconPosition="left"
                    transparent
                    value={searchValue}
                    onChange={(e, { value }) => setSearchValue(value)}
                    icon={searchValue ? deleteIcon : searchIcon}
                  />
                </List.Content>
              </List.Item>
            )}
            {options
              .filter((o) =>
                o.text.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((option) => (
                <List.Item
                  key={option.key}
                  onClick={() => handleChange(onChange, option.value, value)}
                >
                  <List.Content floated="right">
                    {multiSelect && value?.includes(option.value) && (
                      <Icon className={styles.iconCheckmark} name="check" />
                    )}
                    {!multiSelect && (
                      <Checkbox
                        radio
                        checked={value === option.value}
                        className={styles.checkbox}
                      />
                    )}
                  </List.Content>
                  {avatar && <Icon name="user" />}
                  <List.Content>{option.text}</List.Content>
                </List.Item>
              ))}
          </List>
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
