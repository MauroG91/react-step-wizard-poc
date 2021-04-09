import React, { useState } from "react";
import { Form, Label } from "semantic-ui-react";
import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";
import {
  Controller,
  FieldErrors,
  Control,
  RegisterOptions,
} from "react-hook-form";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
registerPlugin(FilePondPluginFileEncode);

interface IProps {
  name: string;
  content?: string;
  required?: boolean;
  disabled?: boolean;
  acceptedFileTypes?: string[];
  errors: FieldErrors;
  control: Control;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
}

export default function FormFileUpload({
  name,
  content,
  errors,
  required = false,
  disabled = false,
  acceptedFileTypes = [".doc", ".docx"],
  control,
  rules,
}: IProps) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Form.Field error={!!errors[name]} required={required} disabled={disabled}>
      <label htmlFor={name}>{content}</label>
      <Controller
        name={name}
        id={name}
        control={control}
        rules={rules}
        render={({ onChange }) => (
          <FilePond
            files={files}
            onupdatefiles={(fileItems) => {
              setFiles(fileItems.map((fileItem) => fileItem.file));

              if (fileItems && fileItems.length) {
                onChange({
                  name: fileItems[0].filename,
                  type: fileItems[0].fileType,
                  size: fileItems[0].fileSize,
                  // @ts-ignore
                  dataBase64: fileItems[0].getFileEncodeBase64String(),
                });
              } else {
                onChange(undefined);
              }
            }}
            allowMultiple={false}
            name="file"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            acceptedFileTypes={acceptedFileTypes}
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
