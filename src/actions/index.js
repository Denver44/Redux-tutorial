import axios from "../api/axios";
import _ from "lodash";
export const fetchPost = () => async (dispatch) => {
  const response = await axios.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const { data } = await axios.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: data });
};

// export const fetchUserAndPost = () => async (dispatch, getState) => {
//   await dispatch(fetchPost());
//   const userIds = _.uniq(_.map(getState().posts, "userId"));
//   userIds.forEach((id) => dispatch(fetchUser(id)));
// };

export const fetchUserAndPost = () => async (dispatch, getState) => {
  await dispatch(fetchPost());
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
