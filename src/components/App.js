import React from "react";
import "./App.css";
import StudentCard from "./StudentCard/StudentCard.jsx";
import MyForm from "./MyForm/MyForm.jsx";
import { Col, Container, Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { studentError } from "../actions/students";

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.student.error);
  const handleCloseAlert = () => {
    dispatch(studentError({ error: "" }));
  };
  return (
    <div>
      <Container>
        <Alert color="danger" isOpen={!!error} toggle={handleCloseAlert}>
          {error}
        </Alert>
        <Col className="mt-4">
          <MyForm />
        </Col>
        <Col className="mt-5">
          <StudentCard />
        </Col>
      </Container>
    </div>
  );
};
export default App;
