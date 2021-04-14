import React from "react";
import StepWizard, { StepWizardChildProps } from "react-step-wizard";
import { Grid } from "semantic-ui-react";
import Navigation from "./components/Navigation";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

const components = [
  {
    name: "step1",
    component: Step1,
  },
  {
    name: "step2",
    component: Step2,
  },
  {
    name: "step3",
    component: Step3,
  },
];

type Child = {
  name: string;
  component: React.FC<StepWizardChildProps>;
};

const FormWrapper = () => {
  const handleRender = () => {
    return components.map((child: Child) =>
      React.createElement(child.component)
    );
  };

  return (
    <Grid>
      <StepWizard
        initialStep={1}
        nav={<Navigation />}
        isHashEnabled={false}
        isLazyMount={true}
      >
        {handleRender()}
      </StepWizard>
    </Grid>
  );
};

export default FormWrapper;
