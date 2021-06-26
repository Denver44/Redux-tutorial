import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "../Input/Input";
import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";

const Form = (props) => {
  // console.log("PROPS ", props);

  const onSave = (formValues) => {
    console.log(formValues);
  };
  return (
    <>
      <h1>Form Reducer</h1>
      <form onSubmit={props.handleSubmit(onSave)} className="ui form">
        <Field name="title" component={Input} label="Enter Title" />
        <Field name="description" component={Input} label="Enter Desc" />
        <Field name="CheckBox" component={CustomCheckBox} />
        <button class="ui inverted green button">Submit</button>
      </form>
    </>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.desc) {
    errors.desc = "You must enter a desc";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate", // Five the Form name
  validate,
})(Form);
