const Types = {
  GET_STUDENTS_REQUEST: "GET_STUDENTS_REQUEST",
  GET_STUDENTS_SUCCESS: "GET_STUDENTS_SUCCESS",
  CREATE_STUDENTS_REQUEST: "CREATE_STUDENTS_REQUEST",
  DELETE_STUDENTS_REQUEST: "DELETE_STUDENTS_REQUEST",
  STUDENT_ERROR: "STUDENT_ERROR",
};

const fetchStudentRequest = () => ({
  type: Types.GET_STUDENTS_REQUEST,
});

const fetchStudentSuccess = ({ items }) => ({
  type: Types.GET_STUDENTS_SUCCESS,
  payload: { items },
});

const createStudentRequest = (payload) => {
  return { type: Types.CREATE_STUDENTS_REQUEST, payload };
};

const deleteStudentRequest = (studentId) => {
  return {
    type: Types.DELETE_STUDENTS_REQUEST,
    payload: {
      studentId,
    },
  };
};

const studentError = ({ error }) => {
  console.log("error", error);
  return {
    type: Types.STUDENT_ERROR,
    payload: {
      error,
    },
  };
};

export {
  Types,
  fetchStudentRequest,
  fetchStudentSuccess,
  createStudentRequest,
  deleteStudentRequest,
  studentError,
};
