import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const RegistrationForm = () => {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Phone", value: "phonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    password2: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!"),
    password: Yup.string()
      .required("Required!")
      .min(5, "Password is too short"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), ''], "Passwords must match")
      .required("Required!"),
    modeOfContact: Yup.string().required("Required!"),
    phone: Yup.string().when("modeOfContact", {
      is: "phonemoc",
      then: Yup.string().required("Required!"),
    }),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form Data: ", values);
    onSubmitProps.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control='input'
            type='email'
            label='Email'
            name='email'
          />
          <FormikControl
            control='input'
            type='password'
            label='Password'
            name='password'
          />
          <FormikControl
            control='input'
            type='password'
            label='Confirm Password'
            name='password2'
          />
          <FormikControl
            control='radio'
            label='Mode of contact'
            name='modeOfContact'
            options={options}
          />
          <FormikControl
            control='input'
            type='text'
            label='Phone number'
            name='phone'
          />
          <hr />
          <button type='submit' disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
