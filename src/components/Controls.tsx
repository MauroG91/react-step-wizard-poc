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
}: any) => (
  <div>
    <hr />
    {currentStep > 1 && (
      <button className="btn btn-default btn-block" onClick={previousStep}>
        Go Back
      </button>
    )}
    {currentStep < totalSteps ? (
      <button className="btn btn-primary btn-block" onClick={nextStep}>
        Continue
      </button>
    ) : (
      <button className="btn btn-success btn-block" onClick={nextStep}>
        Finish
      </button>
    )}
    <hr />
    <div style={{ fontSize: "21px" }}>
      <h4>Other Functions</h4>
      <div>Current Step: {currentStep}</div>
      <div>Total Steps: {totalSteps}</div>
      <button className="btn btn-block btn-default" onClick={firstStep}>
        First Step
      </button>
      <button className="btn btn-block btn-default" onClick={lastStep}>
        Last Step
      </button>
      <button className="btn btn-block btn-default" onClick={() => goToStep(2)}>
        Go to Step 2
      </button>
    </div>
  </div>
);

export default Controls;
