import UsersAPI from "../api";

export const fetchPost = () => async (dispatch) => {
  const response = await UsersAPI.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const addPost = (payload) => {
  return { type: "ADD_POST", payload };
};
