import axios from "../api/axios";
import _ from "lodash";

export const fetchPost = () => async (dispatch) => {
  const response = await axios.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const { data } = await axios.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: data });
});
