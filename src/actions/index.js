import axios from '../api/axios';

// export const fetchPost = () => async (dispatch) => {
//   const response = await axios.get("/posts");
//   dispatch({ type: "FETCH_POST", payload: response.data });
// };

// export const fetchUser = (id) => async (dispatch) => {
//   const response = await axios.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

export const fetchPost = () => {
  const res = axios.get('/posts');
  console.log('res ', res);
  return { type: 'FETCH_POST', payload: res };
};

export const fetchUser = (id) => {
  const res = axios.get(`/users/${id}`);
  return { type: 'FETCH_USER', payload: res };
};
