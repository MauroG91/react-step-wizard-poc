import React from "react";
import { StepWizardChildProps } from "react-step-wizard";
import Controls from "./Controls";

interface Props {}

const Step3 = (props: any) => {
  return (
    <div>
      Step 3
      <Controls {...props} />
    </div>
  );
};

export default Step3;
