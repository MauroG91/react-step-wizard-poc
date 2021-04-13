import React from "react";
import { useFormContext } from "react-hook-form";
import { StepWizardChildProps } from "react-step-wizard";
import { Grid } from "semantic-ui-react";
import FormInput from "../form/FormInput";
import FormListSelect from "../form/FormListSelect";
import Controls from "./Controls";

interface Props {}

const options = [
  {
    key: "male",
    value: "male",
    text: "male",
  },
  {
    key: "female",
    value: "female",
    text: "female",
  },
];

const Step3 = (props: any) => {
  const { control, errors } = useFormContext();
  const { nextStep } = props;
  return (
    <div>
      <Grid.Row>
        <FormListSelect
          name="sex"
          content="Sex"
          options={options}
          errors={errors}
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
        />
      </Grid.Row>
      <Grid.Row>
        <Controls
          {...props}
          nextStep={Object.keys(errors).length === 0 ? nextStep : () => {}}
        />
      </Grid.Row>
    </div>
  );
};

export default Step3;
