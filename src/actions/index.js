import jsonPlaceHolder from "../api/jsonPlaceHolder";
import _ from "lodash";

export const fetchUserAndPost = () => async (dispatch, getState) => {
  await dispatch(fetchPost());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPost = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const { data } = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: data });
};
