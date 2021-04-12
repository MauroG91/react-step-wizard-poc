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
    <Grid>
      <Grid.Column>
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
      </Grid.Column>
      <Grid.Column>
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
      </Grid.Column>
      <Grid.Column>
        <Controls {...props} />
      </Grid.Column>
    </Grid>
  );
};

export default Step1;
