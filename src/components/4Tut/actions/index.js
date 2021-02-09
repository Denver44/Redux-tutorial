import _ from "lodash";
import jsonplaceholder from "../api/jsonPlacholder";

export const fetchPost = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};
// rather than returning the action we call dispatch here manually.
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// -----------MEMOMIZED VERSION --- It has One drawback that it will call one time if we upadte our user still it will not for very first time only.
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());

  // const userarr = _.uniq(_.map(getState().post, "userId"));
  // userarr.forEach((id) => dispatch(fetchUser(id)));

  // This is chain from lodash lib here whater ever the result we get from _.chain it pass to map as first argument then same what ever we get output it pass to uniq. then foreach
  // .value is need to execute this.

  _.chain(getState().post)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
