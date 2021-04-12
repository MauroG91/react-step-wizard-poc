import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import StepWizard, {
  StepWizardProps,
  StepWizardChildProps,
} from "react-step-wizard";

import Navigation from "./components/Navigation";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

interface Props {}

const FormWrapper = () => {
  const onStepChange = () => {
    console.log("here");
  };
  return (
    <StepWizard
      initialStep={1}
      nav={<Navigation />}
      onStepChange={onStepChange}
      isHashEnabled={true}
    >
      <Step1 />
      <Step2 />
      <Step3 />
    </StepWizard>
  );
};

export default FormWrapper;
