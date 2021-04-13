import React from "react";
import { useFormContext } from "react-hook-form";
import { StepWizardChildProps } from "react-step-wizard";
import { Grid } from "semantic-ui-react";
import FormInput from "../form/FormInput";
import FormDropdown from "../form/FormDropdown";
import Controls from "./Controls";

interface Props {}

const options = [
  {
    key: "21",
    value: "18",
    text: "18",
  },
  {
    key: "19",
    value: "19",
    text: "19",
  },
  {
    key: "20",
    value: "20",
    text: "20",
  },
  {
    key: "21",
    value: "21",
    text: "21",
  },
];

const Step2 = (props: any) => {
  const { control, errors } = useFormContext();
  const { nextStep } = props;
  return (
    <div>
      <Grid.Row>
        <FormInput
          name="address"
          content="Address"
          required
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
        <FormDropdown
          name="age"
          content="Age"
          options={options}
          placeholder="Select your Age"
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
        <Controls {...props} />
      </Grid.Row>
    </div>
  );
};

export default Step2;
