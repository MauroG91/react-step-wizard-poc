import React from "react";
import { StepWizardChildProps } from "react-step-wizard";

interface Props {}

const Controls = ({
  currentStep,
  firstStep,
  goToStep,
  lastStep,
  nextStep,
  previousStep,
  totalSteps,
}: any) => {
  return (
    <div>
      <hr />
      {currentStep > 1 && <button onClick={previousStep}>Go Back</button>}
      {currentStep < totalSteps ? (
        <button onClick={nextStep}>Continue</button>
      ) : (
        <button type="submit">Finish</button>
      )}
      <hr />
      <div style={{ fontSize: "21px" }}>
        <h4>Other Functions</h4>
        <div>Current Step: {currentStep}</div>
        <div>Total Steps: {totalSteps}</div>
        <button onClick={firstStep}>First Step</button>
        <button onClick={lastStep}>Last Step</button>
        <button onClick={() => goToStep(2)}>Go to Step 2</button>
      </div>
    </div>
  );
};
export default Controls;
