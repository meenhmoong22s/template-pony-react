import { ErrorMessage } from "formik";
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

const InputFiled = (props) => {
  // get value of props from Fastfiled
  const { field, form, type, label, placeholder, disabled } = props;
  console.log(type);
  //   console.log(disabled);
  // get init from field
  const { name } = field; //, value, onChange, onBlur
  const { errors, touched } = form;
  const showErrors = errors[name] && touched[name];
  return (
    <FormGroup className="form-label-group">
      <Input
        id={name}
        //props of Formik
        // name={name}
        // value = {value}
        // onChange = {onChange}
        // onBlur = {onBlur}
        //----------------
        //fast syntax
        {...field}
        //
        className="form-control"
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        invalid={showErrors}
      />
      {label && <Label for={name}>{label}</Label>}
      {/* {showErrors && <p>{errors[name]}</p>} */}
      {/* {showErrors && <FormFeedback>{errors[name]}</FormFeedback>} */}
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default InputFiled;
