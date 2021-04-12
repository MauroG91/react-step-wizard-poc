import React from "react";
import { StepWizardChildProps } from "react-step-wizard";
import Controls from "./Controls";

interface Props {}

const Step2 = (props: any) => {
  return (
    <div>
      Step 2
      <Controls {...props} />
    </div>
  );
};

export default Step2;
