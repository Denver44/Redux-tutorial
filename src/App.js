import React from "react";
import Post from "./components/Post/Post.jsx";
import MyForm from "./components/MyForm/MyForm.jsx";
import { Col, Container } from "reactstrap";

const App = () => {
  return (
    <div>
      <Container>
        <Col className="mt-4">
          <MyForm />
        </Col>
        <Col className="mt-5">
          <Post />
        </Col>
      </Container>
    </div>
  );
};
export default App;
