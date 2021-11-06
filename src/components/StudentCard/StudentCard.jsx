import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import {
  deleteStudentRequest,
  fetchStudentRequest,
} from "../../actions/students";

const StudentCard = () => {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const student = useSelector((state) => state.student.data);

  const handleFetchStudent = () => dispatch(fetchStudentRequest());

  const handleDeleteStudent = (deleteId) =>
    dispatch(deleteStudentRequest(deleteId));

  useEffect(() => {
    setStudents(student);
  }, [student]);

  return (
    <>
      <Button color="primary" onClick={handleFetchStudent}>
        Fetch Students List
      </Button>
      {students?.map((student) => {
        return (
          <div className="p-3 bg-success mt-2 rounded d-flex">
            <Toast>
              <ToastHeader>{student?.name}</ToastHeader>
              <ToastBody>{student?.address} </ToastBody>
            </Toast>
            <Button
              color="danger"
              onClick={() => handleDeleteStudent(student?._id)}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default StudentCard;
