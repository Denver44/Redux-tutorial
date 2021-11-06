import axios from "axios";

const StudentAPI = axios.create({
  baseURL: "http://localhost:8000",
});

export default StudentAPI;
