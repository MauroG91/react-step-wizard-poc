import React from "react";
import "./App.css";
import { FormProvider, useForm } from "react-hook-form";
import FormWrapper from "./FormWrapper";
import { Form } from "semantic-ui-react";

function App() {
  const methods = useForm();
  const onSubmit = (data: object) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormWrapper />
      </Form>
    </FormProvider>
  );
}

export default App;
