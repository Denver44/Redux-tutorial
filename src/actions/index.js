import axios from "../api/axios";

export const fetchPost = () => async (dispatch) => {
  const response = await axios.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await axios.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
