import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "../Input/Input";
import Customcheckbox from "../CustomCheckBox/Customcheckbox";
// import CheckBox from "../CheckBox/CheckBox";

function Form(props) {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  return (
    <div>
      <h1>Form Reducer</h1>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <Field name="title" component={Input} label="Enter Title" />
        <Field name="desc" component={Input} label="Enter Desc" />
        <Field
          name="CheckBox"
          label="Check This Box"
          component={Customcheckbox}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

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
  form: "streamCreate",
  validate,
})(Form);
