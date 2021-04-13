import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import StepWizard, {
  StepWizardProps,
  StepWizardChildProps,
} from "react-step-wizard";
import { Grid } from "semantic-ui-react";

import Navigation from "./components/Navigation";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

interface Props {}

const FormWrapper = () => {
  return (
    <Grid>
      <StepWizard
        initialStep={1}
        nav={<Navigation />}
        // onStepChange={onStepChange}
        isHashEnabled={true}
      >
        <Step1 />
        <Step2 />
        <Step3 />
      </StepWizard>
    </Grid>
  );
};

export default FormWrapper;
