import React, { CElement } from "react";
import Controls from "./Controls";
import { StepWizardChildProps, StepWizardProps } from "react-step-wizard";
import FormInput from "../form/FormInput";
import { useFormContext } from "react-hook-form";
import { Grid } from "semantic-ui-react";

interface Props {}

const Step1 = (props: any) => {
  const { control, errors } = useFormContext();
  const { nextStep } = props;
  // console.log("name", name);

  if (nextStep) {
    // nextStep();
  }

  return (
    <div>
      <Grid.Row>
        <FormInput
          name="firstName"
          content="First Name"
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
        <FormInput
          name="lastName"
          content="Last Name"
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
        <Controls
          {...props}
          nextStep={Object.keys(errors).length === 0 ? nextStep : () => {}}
        />
      </Grid.Row>
    </div>
  );
};

export default Step1;
