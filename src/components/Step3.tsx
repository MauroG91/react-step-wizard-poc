import React from "react";
import { useFormContext } from "react-hook-form";
import { StepWizardChildProps } from "react-step-wizard";
import { Grid } from "semantic-ui-react";
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

const Step3 = (props: StepWizardChildProps & Props) => {
  const { control, errors } = useFormContext();
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
        <button type="submit">Submit</button>
        <Controls {...props} />
      </Grid.Row>
    </div>
  );
};

export default Step3;
