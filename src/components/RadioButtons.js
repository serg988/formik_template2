import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const RadioButtons = ({ label, name, options, ...rest }) => {
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {(props) => {
          {/* console.log(props) */}
          {/* console.log(props.field) */}
          return options.map((option) => (
            <React.Fragment key={option.key}>
              <input
                type='radio'
                id={option.value}
                {...props.field}
                value={option.value}
                checked={props.field.value === option.value}
              />
              <label htmlFor='{option.value}'>{option.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtons;
