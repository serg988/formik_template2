import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "Please select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];
  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
    checkboxOptions: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required!"),
    description: Yup.string().required("Required!"),
    selectOption: Yup.string().required("Required!"),
    radioOptions: Yup.string().required("Required!"),
    checkboxOptions: Yup.array().required("Required!"),
    birthDate: Yup.date().required("Required!").nullable(),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data: ", values);
    onSubmitProps.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              as='textarea'
              control='textarea'
              type='text'
              label='Description'
              name='description'
            />
            <FormikControl
              control='select'
              type='text'
              label='Select a topic'
              name='selectOption'
              options={dropdownOptions}
            />
            <FormikControl
              control='radio'
              type='text'
              label='Radio topic'
              name='radioOptions'
              options={radioOptions}
            />
            <FormikControl
              control='checkbox'
              type='text'
              label='Checkbox topic'
              name='checkboxOptions'
              options={checkboxOptions}
            />
            <FormikControl
              control='date'
              type='text'
              label='Pick a date'
              name='birthDate'
            />
            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
