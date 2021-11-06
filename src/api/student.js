import API from "./index";

const getAllStudents = () => API.get("/Students");
const createStudent = (payload) => API.post("/Students", payload);
const deleteStudent = (userId) => API.delete(`/Students/${userId.studentId}`);

export { getAllStudents, createStudent, deleteStudent };
