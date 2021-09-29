import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Row } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { addPost } from "../../actions";
import Input from "../Input/Input";

const MyForm = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(101);

  const onSave = (formValues) => {
    dispatch(
      addPost({
        title: formValues?.title,
        body: formValues?.description,
        id: id,
      })
    );
    setId((oldId) => oldId + 1);
  };

  return (
    <form onSubmit={props.handleSubmit(onSave)}>
      <Row className="mt-2">
        <Field
          name="title"
          component={Input}
          label="Enter Post Title"
          className="mt-2"
        />
      </Row>
      <Row className="mt-2">
        <Field
          name="description"
          component={Input}
          label="Enter Post Description"
          className="mt-2"
        />
      </Row>
      <button class="success mt-3">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: "createPost",
})(MyForm);
