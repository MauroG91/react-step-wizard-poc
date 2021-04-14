import React from "react";
import "./App.css";
import { FormProvider, useForm } from "react-hook-form";
import Wizard from "./Wizard";
import { Form } from "semantic-ui-react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

const steps = [
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

function App() {
  const methods = useForm({
    shouldUnregister: false,
  });
  const onSubmit = (data: object) => alert(JSON.stringify(data));

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Wizard steps={steps} navigation={true} />
      </Form>
    </FormProvider>
  );
}

export default App;
