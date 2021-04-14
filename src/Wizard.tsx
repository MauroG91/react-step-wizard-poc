import React from "react";
import StepWizard, { StepWizardChildProps } from "react-step-wizard";
import { Grid } from "semantic-ui-react";
import Navigation from "./components/Navigation";

interface Props {
  steps: Child[];
  navigation?: boolean;
}

type Child = {
  name: string;
  component: React.FC<StepWizardChildProps>;
};

const Wizard = ({ steps, navigation = false }: Props) => {
  const handleRender = () => {
    return steps.map((child: Child) => React.createElement(child.component));
  };

  return (
    <Grid>
      <StepWizard
        initialStep={1}
        nav={navigation ? <Navigation /> : <div />}
        isHashEnabled={false}
        isLazyMount={true}
      >
        {handleRender()}
      </StepWizard>
    </Grid>
  );
};

export default Wizard;
