import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='select' name={name} id={name} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
