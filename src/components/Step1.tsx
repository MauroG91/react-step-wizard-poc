import React from "react";
import Controls from "./Controls";
import { StepWizardChildProps } from "react-step-wizard";
import FormInput from "../form/FormInput";
import { useFormContext } from "react-hook-form";
import { Form, Grid } from "semantic-ui-react";

interface Props {}

const Step1 = (props: StepWizardChildProps & Props) => {
  const { control, errors } = useFormContext();
  return (
    <Form>
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
        <Controls {...props} />
      </Grid.Row>
    </Form>
  );
};

export default Step1;
