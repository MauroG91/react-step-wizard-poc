import React from "react";
import styles from "./Navigation.module.scss";

const Navigation = (props: any) => {
  const { totalSteps, currentStep, goToStep } = props;
  const dots = [];
  for (let i = 1; i <= totalSteps; i += 1) {
    const isActive = currentStep === i;
    dots.push(
      <span
        key={`step-${i}`}
        className={`${styles.dot} ${isActive ? styles.active : ""}`}
        onClick={() => goToStep(i)}
      >
        &bull;
      </span>
    );
  }
  return <div className={styles.nav}>{dots}</div>;
};

export default Navigation;
