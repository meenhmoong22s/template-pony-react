import { ErrorMessage } from "formik";
import React from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

const SelectFiled = (props) => {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  console.log(value);
  console.log(options);
  const selectedOption = options.find((option) => option.value === value);
  const handleSelectOpitonChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };
  const { errors, touched } = form;
  const showErrors = errors[name] && touched[name];
  return (
    <FormGroup className="form-group">
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        //onchangehandselectoption have to below {..field} cause it func custom
        value={selectedOption}
        onChange={handleSelectOpitonChange}
        //--------------
        placeholder={placeholder}
        isDisabled={disabled}
        //--------------
        options={options}
        className={showErrors ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default SelectFiled;
