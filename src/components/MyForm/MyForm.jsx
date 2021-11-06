import { useDispatch } from "react-redux";
import { Row } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { createStudentRequest } from "../../actions/students";
import Input from "../Input/Input";

const MyForm = (props) => {
  const dispatch = useDispatch();

  const onSave = (formValues) => {
    dispatch(
      createStudentRequest({
        name: formValues?.name,
        address: formValues?.address,
      })
    );
  };

  return (
    <form onSubmit={props.handleSubmit(onSave)}>
      <Row className="mt-2">
        <Field
          name="name"
          component={Input}
          label="Enter Name"
          className="mt-2"
        />
      </Row>
      <Row className="mt-2">
        <Field
          name="address"
          component={Input}
          label="Enter Address"
          className="mt-2"
        />
      </Row>
      <button class="success mt-3">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: "createStudent",
})(MyForm);
