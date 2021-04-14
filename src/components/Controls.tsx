import React from "react";
import { useFormContext } from "react-hook-form";
import { StepWizardChildProps } from "react-step-wizard";

const Controls = ({
  currentStep,
  firstStep,
  goToStep,
  lastStep,
  nextStep,
  previousStep,
  totalSteps,
}: StepWizardChildProps) => {
  const { trigger } = useFormContext();
  const validate = async () => {
    const triggerErrors = await trigger();
    if (!triggerErrors) return;
    return nextStep();
  };

  return (
    <div>
      <hr />
      {currentStep > 1 && (
        <button type="button" onClick={previousStep}>
          Go Back
        </button>
      )}
      {currentStep < totalSteps && (
        <button type="button" onClick={validate}>
          Continue
        </button>
      )}
      <hr />
      <div style={{ fontSize: "21px" }}>
        <h4>Other Functions</h4>
        <div>Current Step: {currentStep}</div>
        <div>Total Steps: {totalSteps}</div>
        <button type="button" onClick={firstStep}>
          First Step
        </button>
        <button type="button" onClick={lastStep}>
          Last Step
        </button>
        <button type="button" onClick={() => goToStep(2)}>
          Go to Step 2
        </button>
      </div>
    </div>
  );
};
export default Controls;
