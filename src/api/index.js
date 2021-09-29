import axios from "axios";

const UsersAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default UsersAPI